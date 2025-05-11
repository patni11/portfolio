import React, { useState, useRef } from "react";
import userData from "@constants/data";
import ProjectPopup from "./ProjectPopup";
import { Code2, FileText, PlayCircle, ExternalLink } from "lucide-react";
import { unfinishedProjects } from "@constants/unfinishedProjects";

export default function Projects() {
  const [showUnfinished, setShowUnfinished] = useState(false);

  return (
    <section className="bg-white dark:bg-gray-800">
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto py-20 pb-40">
          {/* Mobile view - single column */}
          <h3 className="text-2xl md:hidden mx-auto text-center font-bold mb-6 font-['Work_Sans']">Projects</h3>
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
                <h2 className="text-3xl font-bold mb-6 font-['EB_Garamond']">My Work</h2>
                <p className="text-lg leading-relaxed font-['Work_Sans']">
There's no clean arc to my work, no tidy narrative. I started with Swift, built iOS games, wandered into Unity, made YouTube videos, wrote articles on medium so I could make money. I fell into AI, then crypto, creating Pendulum—a wild experiment in applying the Harberger tax to digital ownership. Most of what I build never quite finishes. It's have had a bad habit of abandoning things.
<br></br>
<br></br>
That chaos is how I've learned so far. But now, I want to channel that restless energy into something deeper—something I can sit with, shape over years, and look back on not just with pride, but with the feeling that I left a dent. Not in the universe, maybe, but in myself.
<br></br>
<br></br>
I hope these wandering nights will finally take me to new shore soon
                </p>

                <button 
                  className="text-xs italic text-blue-500 mt-8 underline"
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
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
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
}) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [showTechStack, setShowTechStack] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  // Extract tech stack from description
  const techStack = description
    .split('\n')
    .filter(line => line.toLowerCase().includes('built') || line.toLowerCase().includes('using'))
    .join('\n');

  const iconStyle = "h-4 w-4 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-all duration-300";

  const handleVideoHover = () => {
    setShowVideo(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoLeave = () => {
    setShowVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="w-full block cursor-pointer group relative">
      <div className="relative overflow-hidden border-[1px] border-black dark:border-white">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="object-cover h-full w-full"
          />
        </div>
        
        {/* Title Display with Dynamic Content */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-8">
          <h1 className={`text-gray-900 dark:text-gray-50 font-['EB_Garamond'] font-bold transition-opacity duration-300 ease-in-out ${
            showTechStack ? 'text-md opacity-100' : 
            showDescription ? 'text-xs opacity-100' : 
            'text-2xl opacity-100'
          }`}>
            {showTechStack ? techStack : 
             showDescription ? description.split('\n')[0] : 
             title}
          </h1>
        </div>
        
        {/* Corner Icons */}
        <div className="absolute top-4 left-4">
          <div className="relative">
            <Code2 
              className={iconStyle}
              onMouseEnter={() => setShowTechStack(true)}
              onMouseLeave={() => setShowTechStack(false)}
            />
          </div>
        </div>

        <div className="absolute top-4 right-4">
          <div className="relative">
            <FileText 
              className={iconStyle}
              onMouseEnter={() => setShowDescription(true)}
              onMouseLeave={() => setShowDescription(false)}
            />
          </div>
        </div>

        <div className="absolute bottom-4 left-4">
          {videoLink && (
            <div className="relative">
              <a 
                href={videoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <PlayCircle 
                  className={iconStyle}
                  onMouseEnter={handleVideoHover}
                  onMouseLeave={handleVideoLeave}
                />
              </a>
              {showVideo && (
                <video
                  ref={videoRef}
                  className="absolute bottom-full left-0 mb-2 w-64 rounded-lg z-50"
                  src="/path-to-your-video.mp4" // Replace with actual video path
                  muted
                  loop
                />
              )}
            </div>
          )}
        </div>

        <div className="absolute bottom-4 right-4">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink 
              className={iconStyle}
            />
          </a>
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
