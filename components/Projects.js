import React, { useState, useRef } from "react";
import userData from "@constants/data";
import ProjectPopup from "./ProjectPopup";
import { unfinishedProjects } from "@constants/unfinishedProjects";

export default function Projects() {
  const [showUnfinished, setShowUnfinished] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="bg-white dark:bg-gray-800">
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto py-20 pb-40">
          {/* Mobile view - single column */}
          <h3 className="text-md mx-auto text-center mb-8 font-['EB_Garamond']">some projects may not work due to invalid API keys over time, please refer to the video demos </h3>
          <h3 className="text-2xl md:hidden mx-auto text-center font-bold mb-6 font-['EB_Garamond']">Projects</h3>
          <div className="md:hidden grid grid-cols-1 gap-4 mx-4">
            {userData.projects.map((proj, idx) => (
              <ProjectCard
                title={proj.title}
                link={proj.link}
                imgUrl={proj.imgUrl}
                number={`${idx + 1}`}
                description={proj.description}
                key={proj.title}
                videoLink={proj.videoLink}
              />
            ))}
          </div>

          
          
          {/* Desktop view - two columns */}
          <div className="hidden md:flex gap-12">
            {/* Left column - 1/3 width */}
            <div className="w-1/3">
              <div className="sticky top-20">
                {!hoveredProject && <h2 className="text-3xl font-bold mb-6 font-['Inter_var']">My Work</h2>}
                {hoveredProject ? (
                  <div className="text-lg leading-relaxed">
                    <h3 className="text-3xl font-bold mb-4 font-bold font-['Inter_var']">{hoveredProject.title}</h3>
                    <p className="whitespace-pre-line text-xl font-['EB_Garamond']">{hoveredProject.description}</p>
                    {hoveredProject.techStack && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Tech Stack:</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {hoveredProject.techStack.map((tech, index) => (
                            <span key={index} className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {hoveredProject.videoLink && (
                      <a 
                        href={hoveredProject.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 hover:text-red-600 mt-4 inline-block"
                      >
                        Watch Demo →
                      </a>
                    )}
                  </div>
                ) : (
                  <p className="text-xl leading-relaxed font-['EB_Garamond'] font-normal">
                    There's no clean arc to my work, no tidy narrative. I started with Swift, built iOS games, wandered into Unity, made YouTube videos, wrote articles on medium so I could make money. I fell into AI, then crypto, creating Pendulum—a wild experiment in applying the Harberger tax to digital ownership. Most of what I build never quite finishes. It's have had a bad habit of abandoning things.
                    <br></br>
                    <br></br>
                    That chaos is how I've learned so far. But now, I want to channel that restless energy into something deeper—something I can sit with, shape over years, and look back on not just with pride, but with the feeling that I left a dent. Not in the universe, maybe, but in myself.
                    <br></br>
                    <br></br>
                    I hope these wandering nights will finally take me to new shore soon
                  </p>
                )}

                <button 
                  className="text-xs italic text-red-500 mt-8 underline"
                  onClick={() => setShowUnfinished(!showUnfinished)}
                >
                  {showUnfinished ? "Show Main Projects" : "Failed, Small, or Unfinished Projects"}
                </button>
              </div>
            </div>
            
            {/* Right column - 2/3 width */}
            {showUnfinished ? (
              <div className="w-2/3">
                <div className="flex items-center space-x-6 mb-8 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <span>❌</span>
                    <span>Failed</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>🔍</span>
                    <span>Small</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>⏳</span>
                    <span>Unfinished</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {unfinishedProjects.map((proj, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <span className="text-lg">
                        {proj.status === 'failed' ? '❌' : 
                         proj.status === 'small' ? '🔍' : 
                         proj.status === 'unfinished' ? '⏳' : '📝'}
                      </span>
                      <a 
                        href={proj.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-blue-400"
                      >
                        {proj.title}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="w-2/3 grid grid-cols-2 gap-2">
                {userData.projects.map((proj, idx) => (
                  <ProjectCard
                    title={proj.title}
                    link={proj.link}
                    imgUrl={proj.imgUrl}
                    number={`${idx + 1}`}
                    description={proj.description}
                    key={proj.title}
                    videoLink={proj.videoLink}
                    techStack={proj.techStack}
                    onHover={() => setHoveredProject(proj)}
                    onLeave={() => setHoveredProject(null)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({
  title,
  link,
  imgUrl,
  number,
  description,
  videoLink,
  techStack,
  onHover,
  onLeave,
}) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onLeave();
  };

  const isYouTubeVideo = videoLink && videoLink.includes('youtube.com');

  return (
    <div 
      className="w-full block cursor-pointer group relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => window.open(link, '_blank')}
    >
      <div className="relative overflow-hidden border-[1px] border-black dark:border-white">
        <div className="h-72 object-cover">
          {isHovered && videoLink ? (
            isYouTubeVideo ? (
              <iframe
                src={videoLink}
                className="w-full h-full object-cover"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={videoLink}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            )
          ) : (
            <img
              src={imgUrl}
              alt="portfolio"
              className="object-cover h-full w-full"
            />
          )}
        </div>
        
        {/* Title Display */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-8">
          <h1 className="text-2xl text-gray-900 dark:text-gray-50 font-['Inter_var'] font-medium">
            {title}
          </h1>
        </div>
      </div>

      <ProjectPopup
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
        title={title}
        description={description}
        link={link}
        videoLink={videoLink}
      />
    </div>
  );
};
