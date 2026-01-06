"use client";

const ResumeViewer = () => {
  return (
    <div className="min-h-screen pt-14">
      {/* 📱 Mobile: open PDF directly */}
      <div className="md:hidden flex min-h-[70vh] items-center justify-center">
        <a
          href="/itoro_james.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-lg font-medium underline"
        >
          View Resume (PDF)
        </a>
      </div>

      {/* 💻 Desktop: embedded PDF */}
      <div className="hidden md:flex justify-center">
        <div className="w-[80%] max-w-5xl h-[85vh]">
          <iframe
            src="/itoro_james.pdf"
            className="w-full h-full border-0"
            title="Resume"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;
