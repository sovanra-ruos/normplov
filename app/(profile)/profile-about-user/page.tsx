import React from "react";
import ProfileForm from "@/components/ProfileComponent/ProfileFormComponent";



export default function page() {
  return (
    <section className="mt-16 lg:mt-0">
      <div>
      
       
      </div>
      <h1 className="hidden lg:flex text-3xl font-bold pb-4 text-primary ">ព័ត៌មានទូទៅ</h1>
        {/* Fixed Header for Test History */}
     <div className="h-screen">
          <ProfileForm/>
     </div>
       
    </section>
  );
}