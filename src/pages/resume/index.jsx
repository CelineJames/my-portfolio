// import resume from "@/itoro_james.pdf";

const ResumeViewer = () => {
  return (
    <div className="h-[100dvh] w-full pt-14">
      <iframe
        src="/itoro_james.pdf"
        className="h-full w-full rounded shadow-lg"
        title="Resume"
      />
    </div>
  );
};

export default ResumeViewer;
