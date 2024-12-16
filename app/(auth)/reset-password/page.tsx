import React from "react";
import ResetPasswordComponent from "@/components/AuthComponents/ResetPasswordComponent";
export default function page() {
  return (
    <section className="w-full h-screen flex items-center justify-center m-0">
       <div className="w-[50%]">
           <ResetPasswordComponent/>
 
       </div>
    </section>
  //   <section className="w-full h-screen  md:flex items-center justify-center m-0">
  //   {/* section1 text for login */}
  //     <div className="w-full h-screen hidden md:flex bg-yellow-500 sm:bg-green-400 md:bg-red-500 lg:bg-blue-500 xl:bg-purple-500  lg:w-1/2">
          
  //     </div> 
  //    {/* section2 login component */} 
  //     <div className="w-full h-screen lg:w-1/2">
  //       <ResetPasswordComponent/>
  //     </div> 
  // </section>
  );
}