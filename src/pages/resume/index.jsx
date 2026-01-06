const ResumeViewer = () => {
  return (
    <div className="h-[100dvh] w-full pt-14 overflow-hidden flex justify-center">
      <div className="h-full w-full md:w-[80%] lg:w-[70%] overflow-hidden">
        <iframe
          src="/itoro_james.pdf#view=FitH"
          className="h-full w-full border-0"
          title="Resume"
        />
      </div>
    </div>
  );
};

export default ResumeViewer;
