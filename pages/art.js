"use client"
import React, { useState, useEffect, useRef } from "react";
import ContainerBlock from "../components/ContainerBlock";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import * as THREE from 'three'
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber'
import { useFBO, useGLTF, useScroll, Text, Text3D, Image, Scroll, Preload, ScrollControls, MeshTransmissionMaterial } from '@react-three/drei'
import { easing } from 'maath'
import dynamic from "next/dynamic";
function Lens({ children, damping = 0.2, ...props }) {
    const ref = useRef()
    const { nodes } = useGLTF('/lens-transformed.glb')
    const buffer = useFBO()
    const viewport = useThree((state) => state.viewport)
    const [scene] = useState(() => new THREE.Scene())
    useFrame((state, delta) => {
      // Tie lens to the pointer
      // getCurrentViewport gives us the width & height that would fill the screen in threejs units
      // By giving it a target coordinate we can offset these bounds, for instance width/height for a plane that
      // sits 15 units from 0/0/0 towards the camera (which is where the lens is)
      const viewport = state.viewport.getCurrentViewport(state.camera, [0, 0, 15])
      easing.damp3(
        ref.current.position,
        [(state.pointer.x * viewport.width) / 2, (state.pointer.y * viewport.height) / 2, 15],
        damping,
        delta
      )
      // This is entirely optional but spares us one extra render of the scene
      // The createPortal below will mount the children of <Lens> into the new THREE.Scene above
      // The following code will render that scene into a buffer, whose texture will then be fed into
      // a plane spanning the full screen and the lens transmission material
      state.gl.setRenderTarget(buffer)
      state.gl.setClearColor('#d8d7d7')
      state.gl.render(scene, state.camera)
      state.gl.setRenderTarget(null)
    })
    return (
      <>
        {createPortal(children, scene)}
        <mesh scale={[viewport.width, viewport.height, 1]}>
          <planeGeometry />
          <meshBasicMaterial map={buffer.texture} />
        </mesh>
        <mesh scale={0.25} ref={ref} rotation-x={Math.PI / 2} geometry={nodes.Cylinder.geometry} {...props}>
          <MeshTransmissionMaterial buffer={buffer.texture} ior={1.2} thickness={1.5} anisotropy={0.1} chromaticAberration={0.04} />
        </mesh>
      </>
    )
  }

function Images() {
  const group = useRef()
  const data = useScroll()
  const { width, height } = useThree((state) => state.viewport)
  useFrame(() => {
    if (group.current && group.current.children.length > 0) {
      // Page 1 animations (0% - 33% scroll) - Zoom in then zoom out
      const firstPageProgress = data.range(0, 1 / 2)
      
      // CURRENT: Smooth zoom in/out using sine wave
//      const zoomValue = 1 + Math.sin(firstPageProgress * Math.PI) * 0.3
//const zoomValue = 1.3
      
      // ALTERNATIVES - uncomment one to try different effects:
      
      // 1. More dramatic zoom (goes to 2x size):
      // const zoomValue = 1 + Math.sin(firstPageProgress * Math.PI) * 1.0
      
      // 2. Zoom out then in (starts big, gets small, then normal):
      // const zoomValue = 1 - Math.sin(firstPageProgress * Math.PI) * 0.3
      
      // 3. Multiple zoom cycles (zoom in/out twice):
      // const zoomValue = 1 + Math.sin(firstPageProgress * Math.PI * 2) * 0.2
      
      // 4. Ease-in zoom (slow start, fast end):
      // const zoomValue = 1 + Math.pow(firstPageProgress, 2) * 0.5
      
      // 5. Linear zoom in only (original behavior):
      const zoomValue = 1 + firstPageProgress * 0.3
      
      // 6. Bounce effect (overshoots then settles):
      // const zoomValue = 1 + (Math.sin(firstPageProgress * Math.PI) * (1 - firstPageProgress * 0.3)) * 0.4
      
      group.current.children[0].material.zoom = zoomValue
      if (group.current.children[1]) group.current.children[1].material.zoom = zoomValue
      
      // Page 2 animations (38% - 71% scroll)
      // EXPLANATION: 
      // - data.range(1.15/3, 1/3) = scroll from 38% to 71% total
      // - 1.15/3 = 0.383 (start at 38.3% scroll)
      // - 1/3 = 0.333 (duration of 33.3%, so ends at 71.6% scroll)
      // - This affects images 2, 3, and 4 (but we only have 4 images total!)
      
      // Current code has issues - let me show what's happening:
      if (group.current.children[2]) {
        // children[2] = glitch.png - this works!
        group.current.children[2].material.zoom = 1
      }
      if (group.current.children[3]) {
        // children[3] = glitch-2.png - this works!
        group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1.2) / 1.2
      }
      if (group.current.children[4]) {
        // children[4] = doesn't exist! You only have 4 images (0,1,2,3)
        // This condition will always be false
        group.current.children[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
      }
      
      // Page 3 animations (53% - 86% scroll) - Add more images and uncomment these
      // if (group.current.children[5]) group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
      // if (group.current.children[6]) group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3
    }
  })
  return (
    <group ref={group}>
      {/* Vertically stacked images - one after another as you scroll */}
      
      {/* Image 1 - Top of page */}
      <Image position={[-1.5, height * 0.1, 5]} scale={[width * 0.6, height * 0.8, 1]} url="/art/motion-blur.png" />
      
      {/* Image 2 - 60% down first page, slight overlap */}
      <Image position={[1, -height * 0.5, 3]} scale={[width, height*0.6, 1]} url="/art/laid-back.png" />
      
      {/* Image 3 - Start of second page, slight overlap */}
      <Image position={[-0.3, -height * 1.5, -1]} scale={[width, height, 1]} url="/art/glitch.png" />
      
      {/* Image 4 - Middle of second page */}
      <Image position={[1.4, -height * 2.1, 1]} scale={[width * 0.6, height * 0.6, 1]} url="/art/glitch-2.png" />
      
      {/* Page 3 - Add more images for final section */}
      {/* <Image position={[0, -height * 2.5, 5]} scale={[width * 0.8, height * 0.4, 1]} url="/art/your-image.png" /> */}
    </group>
  )
}

function Typography() {
  const state = useThree()
  const { width, height } = state.viewport.getCurrentViewport(state.camera, [0, 0, 12])
  
  // Use Three.js default font - no loading required
  // const shared = { 
  //   letterSpacing: -0.1, 
  //   color: 'black',
  //   fontSize: 1.2,
  //   maxWidth: 200
  // }


  
  return (
    <>
      {/* Page 1 text */}
      {/* <Text children="Art" anchorX="left" position={[-width / 2.5, -height / 10, 12]} {...shared} color={"white"}/> */}
      
      <Text3D 
        font="/fonts/Inter.json"
        size={0.5}
        height={0.1}
        position={[0, -height / 10, 12]}
        letterSpacing={-0.08}
        color={"white"}
      >
        Art
        <meshStandardMaterial color="white" />
      </Text3D>

        </>
  )
}



// Mobile detection component
function MobileView() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#d8d7d7',
      padding: '20px',
      textAlign: 'center'
    }}>
      {/* Navbar for mobile */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 100, 
        background: 'rgba(216, 215, 215, 0.9)', 
        backdropFilter: 'blur(10px)' 
      }}>
        <div style={{ padding: '10px 0' }}>
          <Navbar />
        </div>
      </div>
      
      {/* Mobile content */}
      <div style={{ marginTop: '120px' }}>
        <img 
          src="/art/not-in-phone.gif" 
          alt="Not available on mobile" 
          style={{ 
            maxWidth: '80%', 
            maxHeight: '60vh', 
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)' 
          }} 
        />
        <h2 style={{ 
          marginTop: '20px', 
          fontSize: '24px', 
          color: '#374151',
          fontFamily: 'Inter var, sans-serif',
          fontWeight: '600' 
        }}>
          View in Desktop
        </h2>
        <p style={{ 
          marginTop: '10px', 
          fontSize: '16px', 
          color: '#6B7280',
          fontFamily: 'Inter var, sans-serif',
          maxWidth: '300px' 
        }}>
          This interactive experience is optimized for desktop devices
        </p>
      </div>
    </div>
  )
}

const ArtPageComponent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Ensure we're on the client side
    setIsClient(true);
    
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(!!gl);
    } catch (e) {
      setHasWebGL(false);
    }

    const checkMobile = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent;
      const isMobileDevice = width <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show loading until client-side rendering is ready
  if (!isClient) {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#d8d7d7'
      }}>
        Loading...
      </div>
    );
  }

  // Show WebGL not supported message
  if (!hasWebGL) {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#d8d7d7',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '24px', color: '#374151', marginBottom: '20px' }}>
          WebGL Not Supported
        </h2>
        <p style={{ fontSize: '16px', color: '#6B7280' }}>
          Your browser doesn't support WebGL. Please try a different browser or update your current one.
        </p>
      </div>
    );
  }

  // Show mobile view for mobile devices
  if (isMobile) {
    return <MobileView />;
  }

  // Desktop experience
  return (
    <div className="art" style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      {/* Navbar overlay with reduced padding */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 100, 
        background: 'rgba(216, 215, 215, 0.5)', 
        backdropFilter: 'blur(20px)',
      }}>
        <div style={{ padding: '10px 0' }}>
          <Navbar />
        </div>
      </div>
      
      
      <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
        <ScrollControls damping={0.2} pages={3} distance={0.5}>
          <Lens>
            <Scroll>
              <Typography />
              <Images />
            </Scroll>
            {/** This is a helper that pre-emptively makes threejs aware of all geometries, textures etc
                 By default threejs will only process objects if they are "seen" by the camera leading 
                 to jank as you scroll down. With <Preload> that's solved.  */}
            <Preload />
          </Lens>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

const ArtPage = dynamic(() => Promise.resolve(ArtPageComponent), { ssr: false });

export default ArtPage;
