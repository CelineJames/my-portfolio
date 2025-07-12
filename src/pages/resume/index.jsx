// src/pages/Resume.tsx or app/resume/page.tsx (if using Next.js App Router)
import React from "react";
import resume from "@/assets/my-resume.png";

const ResumeViewer = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4">
      <img src={resume} alt="" className="w-[70%] object-contain mt-20" />
      <a
        href="/Itoro-James.pdf"
        download
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeViewer;
