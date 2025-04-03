const DemoVideo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-center">
          <video 
            className="w-full max-w-4xl rounded-lg shadow-lg" 
            controls
            autoPlay={false}
          >
            <source src="/video/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;