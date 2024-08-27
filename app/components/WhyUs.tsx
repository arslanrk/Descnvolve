import React from "react";
import { FaHandshake } from "react-icons/fa6";
import { IoBulbSharp } from "react-icons/io5";
import { FaHandPeace } from "react-icons/fa";

const WhyUs = () => {
  return (
    <div className="py-16 px-16">
      <div className="flex flex-col gap-2">
        <h2 className="text-white text-5xl font-bold">
          Why choose the Descnvolve?
        </h2>
        <p className="text-sm font-light text-gray-400">
          TRAINING PROGRAM FOR DEVELOPERS and other professionals in technology,
          information and communication (ICT).
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-20 w-full">
        <div className="flex flex-col justify-center items-center rounded-lg bg-white text-black px-4 py-4 gap-3 lg:w-[370px] lg:h-[324px]">
          <FaHandshake color="#F4792F" size={100} />
          <h6 className="italic font-medium text-center">
            Involvement with the Local Community and Practice in Projects
          </h6>
          <p className="font-light text-sm text-gray-400">
            We engage with the local community, creating technological solutions
            for local entrepreneurs and collaborating with civil society
            organizations and government. This allows students to have contact
            with real projects, gaining experience and contributing to the
            development of the region.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg bg-white text-black px-4 py-4 gap-3 lg:w-[370px] lg:h-[324px]">
          <IoBulbSharp color="#F4792F" size={100} />
          <h6 className="italic font-medium text-center">
            Opportunity to Learn Information and Communication Technology (ICT):
          </h6>
          <p className="font-light text-sm text-gray-400">
            The Desenvolvimento Project offers a unique opportunity to acquire
            valuable skills in information and communication technology. With
            the growing demand for ICT professionals, this training can open
            doors to a promising career in a constantly growing sector.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg bg-white text-black px-4 py-4 gap-3 lg:w-[370px] lg:h-[324px]">
          <FaHandPeace color="#F4792F" size={100} />
          <h6 className="italic font-medium text-center">
            Comprehensive Support and Resources:
          </h6>
          <p className="font-light text-sm text-gray-400">
            We offer a comprehensive set of resources and support for
            participants, including monitoring, hardware (notebook), internet
            connectivity, career guidance from experienced professionals,
            English courses, hackathons, in-person workshops... This creates a
            conducive environment for and personal development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
