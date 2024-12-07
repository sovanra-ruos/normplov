import React from "react";
import LoginComponent from "@//components/AuthComponents/LoginComponent";
import Image from 'next/image'

export default function page() {
  return (
    <section  className="w-full h-screen flex items-center justify-center">
      <div className="hidden lg:block lg:w-1/2 xl:w-1/2  h-screen   bg-primary">
         <div className="">
          <div className="lg:w-11/12 xl:w-11/12 xl:h-52 p-14 text-center bg-primary">
                <h1 className="text-4xl font-bold text-white">Welcome to NormPlow </h1>
                <p className="text-lg pt-4 text-white">រកឃើញសក្តានុពលរបស់អ្នក និងស្វែងរកជំនាញឯកទេស នៅសាកលវិទ្យាល័យដែលស្របទៅនឹងចំណង់ចំណូលចិត្ត ចំណុចខ្លាំង និងគោលដៅអាជីពនាពេលអនាគតរបស់អ្នក។</p>
          </div>
         </div >
            <div className="bg-primary  lg:w-11/12 xl:w-11/12 ">
                <div className="w-full flex items-center">
                      <Image
                      src="/auth/login.png"
                      width={600}
                      height={600}
                      alt="Login Illustration"
                      priority
                      className="lg:mt-9 lg:w-full lg:ml-4 xl:mb-0 xl:mt-3 xl:w-11/12 "
                    />
                </div>
            </div>
      </div>
     {/* section2 login component */} 
      <div className="w-full md:w-2/4 h-screen lg:w-1/2">
          <LoginComponent/>
      </div> 
  </section>
  );
}
