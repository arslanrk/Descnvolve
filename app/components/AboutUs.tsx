import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-20 py-16 px-16">
      <div className="flex flex-col gap-7 h-[100%]">
        <h4 className="font-extrabold italic text-5xl text-left">
          Who Are We?
        </h4>
        <p className="italic text-sm text-gray-400">
          It’s the early days, you just had a long conversation with two friends
          about a meaningful challenge that you’re all passionate about and have
          a potential solution for. You’re ready to embark the startup journey.
        </p>
        <p className="italic text-sm text-gray-400">
          we all passionate about and have a potential solution for. You’re
          ready to embark the startup journey.
        </p>
      </div>

      <div className="bg-white text-black rounded-lg w-[350px] px-5 py-5 flex flex-col gap-5 membersWrapper">
        <h6 className="font-bold">Memebers</h6>
        <div className="flex items-center gap-5">
        <img
            src="/images/user2.jpg"
            alt="logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="text-black font-bold">Anna Olsen</p>
            <p className="text-gray-400 font-light italic text-xs">
              100 SHARES
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img
            src="/images/user2.jpg"
            alt="logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="text-black font-bold">Elizabeth Olsen</p>
            <p className="text-gray-400 font-light italic text-xs">
              100 SHARES
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
        <img
            src="/images/user2.jpg"
            alt="logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="text-black font-bold">Ashly Olsen</p>
            <p className="text-gray-400 font-light italic text-xs">
              100 SHARES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
