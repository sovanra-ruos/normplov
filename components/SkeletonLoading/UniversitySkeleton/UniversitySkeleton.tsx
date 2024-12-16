import React from "react";
import CardUniversitySkeleton from "./CardUniversitySkeleton";

export default function UniversitySkeleton() {
  return (
    <div>
        <div className="animate-pulse bg-slate-200 lg:h-96 md:h-80 h-60 w-full">
          <div className="flex justify-center">
            <div className="animate-pulse bg-slate-50 lg:w-[500px] lg:h-[50px] md:w-[500px] md:h-[40px] w-[250px] h-[25px] lg:mt-[110px] md:mt-[110px] mt-[40px] rounded-xl"></div>
          </div>
          <div className="flex justify-center ">
            <div className="animate-pulse bg-slate-50 lg:w-[900px] lg:h-[50px] md:w-[680px] md:h-[40px] w-[350px] h-[30px] mt-[20px] rounded-xl"></div>
          </div>
          <div className="lg:flex md:flex block justify-center lg:space-x-3 md:space-x-3 space-x-0 lg:ml-0 md:ml-0 ml-5">
            <div className="animate-pulse bg-slate-50 lg:w-[445px] lg:h-[40px] md:w-[335px] md:h-[34px] w-[350px] h-[28px] lg:mt-[20px]  md:mt-[15px] mt-3 rounded-xl"></div>
            <div className="animate-pulse bg-slate-50 lg:w-[445px] lg:h-[40px] md:w-[335px] md:h-[34px] w-[350px] h-[28px] lg:mt-[20px] md:mt-[15px] mt-3 rounded-xl"></div>
          </div>
        </div>
        <div className=" w-full h-full flex justify-center ">
          <div className=" lg:w-[80%] md:w-[90%] w-[93%] ">
            <div className="animate-pulse bg-slate-100 lg:w-[445px] lg:h-[40px] md:w-[445px] md:h-[40px] w-[320px] h-[30px] mt-[30px]  rounded-xl"></div>
            <CardUniversitySkeleton/>
          </div>
        </div>
        <div></div>
      </div>
  );
}
