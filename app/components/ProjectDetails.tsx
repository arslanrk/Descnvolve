import React from "react";
import { IoIosPlayCircle } from "react-icons/io";

const ProjectDetail = () => {
  return (
    <div className="glassy-wrapper">
      <div className="flex z-30 items-center justify-between w-full px-52 flex-wrap">
        <div className="flex flex-col gap-1 h-[100%] justify-center items-center">
          <h4 className="font-extrabold italic text-5xl">
            Learn to program <br /> from scratch!
          </h4>
          <p className="italic text-sm text-gray-400">
            Be the architect of digital worlds, and access highly profitable
            <br />
            opportunities in the job market!
          </p>
          <div className="flex items-center mt-10 gap-10 w-full">
            <div className="flex flex-col">
              <button className="bg-white text-black rounded-sm px-6 py-1 text-xs">
                Enrollment
              </button>
              <div className="enrollmentBtn"></div>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="playbtnClass">
                <IoIosPlayCircle color="#fff" size={20} />
              </div>
              <span className="text-xs">To attend</span>
            </div>
          </div>
        </div>
        <img
          src="/images/programmer-hoodie.png"
          alt="logo"
          width={400}
          height={400}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default ProjectDetail;
