"use client";

const ResumeViewer = () => {
  return (
    <div className="min-h-screen pt-14">
      {/* 💻 Desktop: embedded PDF */}
      <div className="hidden md:flex justify-center">
        <div className="w-[80%] max-w-5xl h-[85vh]">
          <iframe
            src="/Itoro_James_Resume.pdf"
            className="w-full h-full border-0"
            title="Resume"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;
