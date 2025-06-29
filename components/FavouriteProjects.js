import React, { useState } from "react";
import Link from "next/link";
import userData from "@constants/data";
import ProjectPopup from "./ProjectPopup";

export default function FavouriteProjects() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const FavProjects = ["ResMe", "Face ID For Mac", "NEU Gym Trends", "Photoshop Lite"];

  const projectData = userData.projects.filter((proj) => {
    return FavProjects.includes(proj.title);
  });

  const [currentProj, setCurrentProj] = useState(0);

  // Helper function to get project index by title
  const getProjectIndex = (title) => {
    return projectData.findIndex(proj => proj.title === title);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Fav <span className="text-red-500">Projects</span>
          </h2>

          <Link href="/projects">
            <a className="inline-flex items-center px-6 py-3 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200">
              <span>View All Projects</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ResMe - Main project (spans 2 columns on lg) */}
          <div className="lg:col-span-2">
            <div
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => {
                setCurrentProj(getProjectIndex("ResMe"));
                setPopupOpen(true);
              }}
            >
              <div className="aspect-video relative">
                <img
                  src={projectData[getProjectIndex("ResMe")]?.imgUrl || "projects/resme.png"}
                  alt="ResMe"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Project Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">ResMe</h3>
                      <p className="text-gray-200 text-sm line-clamp-2">
                        {projectData[getProjectIndex("ResMe")]?.description || "AI-powered resume and cover letter builder"}
                      </p>
                    </div>
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NEU Gym Trends */}
          <div>
            <div
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => {
                setCurrentProj(getProjectIndex("NEU Gym Trends"));
                setPopupOpen(true);
              }}
            >
              <div className="aspect-square relative">
                <img
                  src={projectData[getProjectIndex("NEU Gym Trends")]?.imgUrl || "projects/neugym.png"}
                  alt="NEU Gym Trends"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white mb-1">NEU Gym Trends</h3>
                  <p className="text-gray-200 text-xs">
                    {projectData[getProjectIndex("NEU Gym Trends")]?.description || "Real-time gym insights"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Face ID For Mac */}
          <div className="md:col-span-2 lg:col-span-1">
            <div
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => {
                setCurrentProj(getProjectIndex("Face ID For Mac"));
                setPopupOpen(true);
              }}
            >
              <div className="aspect-square relative">
                <img
                  src={projectData[getProjectIndex("Face ID For Mac")]?.imgUrl || "projects/faceID.png"}
                  alt="Face ID For Mac"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white mb-1">Face ID For Mac</h3>
                  <p className="text-gray-200 text-xs">
                    {projectData[getProjectIndex("Face ID For Mac")]?.description || "Facial recognition login"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Photoshop Lite - Additional featured project */}
          <div className="md:col-span-2">
            <div
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => {
                setCurrentProj(getProjectIndex("Photoshop Lite"));
                setPopupOpen(true);
              }}
            >
              <div className="aspect-video relative">
                <img
                  src={projectData[getProjectIndex("Photoshop Lite")]?.imgUrl || "projects/imageProcessing.png"}
                  alt="Photoshop Lite"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Photoshop Lite</h3>
                      <p className="text-gray-200 text-sm line-clamp-2">
                        {projectData[getProjectIndex("Photoshop Lite")]?.description || "Lightweight Java Swing photo editing app"}
                      </p>
                    </div>
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Java
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectPopup
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
        title={projectData[currentProj]?.title || ""}
        description={projectData[currentProj]?.description || ""}
        link={projectData[currentProj]?.link || ""}
        videoLink={projectData[currentProj]?.videoLink || ""}
      />
    </section>
  );
}
