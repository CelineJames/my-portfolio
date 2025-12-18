import resume from "@/assets/resume.png";

const ResumeViewer = () => {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-6 px-4 py-10">
      <img
        src={resume}
        alt="Resume preview"
        className="max-h-[80vh] w-auto object-contain shadow-lg rounded mt-14"
      />
      <a
        href="/itoro_james.pdf"
        download
        className="px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeViewer;
