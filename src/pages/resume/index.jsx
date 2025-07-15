import resume from "@/assets/resume.png";

const ResumeViewer = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 py-10">
      <img
        src={resume}
        alt="Resume preview"
        className="max-h-[80vh] w-auto object-contain shadow-lg rounded"
      />
      <a
        href="/Itoro-James.pdf"
        download
        className="px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeViewer;
