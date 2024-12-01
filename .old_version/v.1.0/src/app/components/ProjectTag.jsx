import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
   const buttonStyles = isSelected
      ? "text-white border-primary-500"
      : "text-[#ADB7BE] border-slate-600 hover:border-white";

   return (
      <button
         onClick={() => onClick(name)}
         className={`border-2 rounded-full px-4 py-1 text-lg md:px-6 md:py-3 md:text-xl cursor-pointer ${buttonStyles}`}
      >
         {name}
      </button>
   );
};

export default ProjectTag;
