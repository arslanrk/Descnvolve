import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-fit py-2 px-10">
      <div className="w-[40%]"></div>
      <div className="w-[60%] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="rounded-md"
          />
          <div className="flex flex-col italic font-serif font-bold text-white uppercase">
            <span className="text-xs">Project</span>
            <span>Descnvolve</span>
          </div>
        </div>
        <GiHamburgerMenu color="#fff" size={20} />
      </div>
    </div>
  );
};

export default Header;
