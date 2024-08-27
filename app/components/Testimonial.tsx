import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-20 py-16 px-16">
      <div className="flex flex-col gap-7 h-[100%]">
        <h4 className="font-extrabold italic text-5xl text-left">
          See what people are saying about us
        </h4>
        <p className="italic text-sm text-gray-400">
          You need talented people on-demand across various tasks that your
          full-time workforce can’t prioritize at the moment. As an Open
          Enterprise, you can easily fund tasks and have people apply to work on
          them in return for funds or shares.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-center">
          <div className="bg-white text-black rounded-lg lg:w-[500px] px-5 py-5 flex flex-col gap-2 h-fit testimonialWrapper">
            <p className="font-bold text-sm">Alex Adams</p>
            <p className="text-sm">
              Looking for an amazing copywriter using Open Enterprise to help us
              write an article on how to get started.
            </p>
          </div>
        </div>
        <div className="bg-white text-black rounded-lg lg:w-[500px] px-5 py-5 flex flex-col gap-2 h-fit testimonialWrapper">
          <p className="font-bold text-sm">John Morisson</p>
          <p className="text-sm">
            Looking for an amazing copywriter using Open Enterprise to help us
            write an article on how to get started.
          </p>
        </div>
        <div className="flex justify-end">
          <div className="bg-white text-black rounded-lg lg:w-[500px] px-5 py-5 flex flex-col gap-2 h-fit testimonialWrapper">
            <p className="font-bold text-sm">Kristen Grace</p>
            <p className="text-sm">
              Looking for an amazing copywriter using Open Enterprise to help us
              write an article on how to get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
