// 'use client'
// import React, { useState } from "react";
// import LoginComponent from "@//components/AuthComponents/LoginComponent";
// import Image from 'next/image'

// export default function LoginPage() {
//     const [showLogin, setShowLogin] = useState(true); // State to control visibility

//     return (
//       <section className="w-full h-screen flex items-center justify-center">
//         {/* Left Side */}
//         <div className="h-screen bg-primary w-6/12 hidden lg:block">
//           <div className="w-full h-auto bg-primary text-center px-28 mt-7">
//             <h1 className="text-4xl font-bold text-white">
//               សូមស្វាគមន៍មកកាន់គេហទំព័រនាំផ្លូវ
//             </h1>
//             <p className="text-lg font-normal pt-3 text-white">
//               រកឃើញសក្តានុពលរបស់អ្នក និងស្វែងរកជំនាញឯកទេស នៅសាកលវិទ្យាល័យដែលស្របទៅនឹងចំណង់ចំណូលចិត្ត
//               ចំណុចខ្លាំង និងគោលដៅអាជីពនាពេលអនាគតរបស់អ្នក។
//             </p>
//           </div>
//           <div className="h-3/4 mt-4 ml-14">
//             <div className="h-full">
//               <Image
//                 src="/auth/login.png"
//                 width={680}
//                 height={680}
//                 alt="Login Image"
//                 className=""
//               />
//             </div>
//           </div>
//         </div>
  
//         {/* Right Side */}
//         <div className="h-screen w-full md:w-3/5 lg:w-6/12">
//           {showLogin && (
//             <LoginComponent onClose={() => setShowLogin(false)} />
//           )}
//         </div>
//       </section>
//     );
// }
