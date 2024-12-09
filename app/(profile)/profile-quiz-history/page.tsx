import React from "react";
import TestList from "@/components/ProfileComponent/TestCardList";

export default function page() {
  return (
    <section className="mt-16 lg:mt-0">
      <h1 className="hidden lg:flex text-3xl font-bold pb-4 text-primary ">Test History</h1>
        {/* Fixed Header for Test History */}
      
       <TestList/>
    </section>
  );
}