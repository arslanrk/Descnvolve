import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[90vh]">
      <video
        autoPlay
        loop
        muted
        className="inset-0 w-full h-full object-fill"
      >
        <source src="/images/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Banner;
