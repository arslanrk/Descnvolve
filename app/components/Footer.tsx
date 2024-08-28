import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-28 py-16 px-16 mt-28">
      <div className="flex flex-col gap-7 h-[100%]">
        <h4 className="font-extrabold italic text-5xl text-left">
          You like what you say?
        </h4>
        <p className="italic text-sm text-gray-400">
          If you can’t wait to run a new or existing organization on Open
          Enterprise and are willing to explore and navigate the beta, we’d love
          to get you started.
        </p>
        <div className="testimonialWrapper bg-white text-black px-5 py-2 w-fit rounded-lg mt-10">
            Get in touch
        </div>
      </div>
      <img
          src="/images/banner2.png"
          alt="logo"
          width={400}
          height={400}
          className="rounded-md"
        />
    </div>
  );
};

export default Footer;
