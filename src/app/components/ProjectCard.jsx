import React, { useState } from "react";
// import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCode } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const ProjectCard = ({
   imgUrl,
   title,
   description,
   technologies,
   previewUrl,
   youtubeUrl,
   githubUrl,
}) => {
   const [isExpanded, setIsExpanded] = useState(false);

   return (
      <div>
         <div
            className="group rounded-t-xl h-52 md:h-72 bg-center relative overflow-hidden"
            src={imgUrl}
            alt={title}
            width={300}
            height={200}
            style={{
               background: `url(${imgUrl})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
         >
            <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
               {previewUrl != undefined ? (
                  <Link
                     href={previewUrl}
                     className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white m-2 group/link"
                  >
                     <FontAwesomeIcon
                        icon={faEye}
                        className="h-8 w-8 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                     />
                  </Link>
               ) : null}
               {githubUrl != undefined ? (
                  <Link
                     href={githubUrl}
                     className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white m-2 group/link"
                  >
                     <FontAwesomeIcon
                        icon={faCode}
                        className="h-8 w-8 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                     />
                  </Link>
               ) : null}
               {youtubeUrl != undefined ? (
                  <Link
                     href={youtubeUrl}
                     className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white m-2 group/link"
                  >
                     <FontAwesomeIcon
                        icon={faYoutube}
                        className="h-8 w-8 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                     />
                  </Link>
               ) : null}
            </div>
         </div>
         <div className="bg-[#181818] rounded-b-xl py-6 px-4 text-white">
            <h5 className="font-lg font-semibold">{title}</h5>
            <p className="text-[#ADB7BE]">
               {isExpanded || description.length <= 224
                  ? description
                  : `${description.slice(0, 224)}...`}
            </p>
            {description.length > 224 && (
               <button onClick={() => setIsExpanded(!isExpanded)}>
                  {isExpanded ? "Show Less" : "Show More"}
               </button>
            )}
            <ul className="mt-2 flex flex-wrap">
            {technologies.map((tech) => (
               <li className="mr-1.5 mt-2" key={tech}>
                  <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300 ">
                     {tech}
                  </div>
               </li>
            ))}
         </ul>
         </div>
      </div>
   );
};

export default ProjectCard;
