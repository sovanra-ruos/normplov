// 'use client';
// import React, { useState } from 'react';
// import ButtonProfile from './ButtonProfile';
// import { History, Archive, User, LogOut, Menu, X } from 'lucide-react'; // Added X for close icon
// import { useRouter ,usePathname } from 'next/navigation';
// import Image from 'next/image'

// const SideBarProfileComponent = () => {
//   const [activeButton, setActiveButton] = useState<string>('profile-quiz-history'); // State to track the active button
//   const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false); // State for mobile sidebar toggle
//   const [isModalOpen, setModalOpen] = useState<boolean>(false); // State for modal visibility
//   const router = useRouter();
//   const pathname = usePathname(); // Get the current route
//   const getPageTitle = () => {
//     switch (pathname) {
//       case '/profile-quiz-history':
//         return 'Test History';
//       case '/profile-draft':
//         return 'Draft Test';
//       case '/profile-about-user':
//         return 'Information';
//       default:
//         return '/profile-quiz-history';
//     }
//   };
//   const handleButtonClick = (buttonName: string, path: string) => {
//     setActiveButton(buttonName);
//     router.push(path); // Navigate to the specified route
//   };

//   const closeSidebar = () => {
//     setSidebarOpen(false); // Close the sidebar
//     setModalOpen(false);   // Close the modal if it was open
//   };

//   return (
//     <div className=''>
//       <div className="flex flex-col h-screen">
//       <div className="lg:hidden flex justify-between items-center w-full p-4 text-white   rounded-xl fixed top-0 left-0 right-0 z-50 bg-white ">
//   {/* Hamburger Icon */}
//   <button
//     className="flex items-center space-x-2 text-lg font-bold p-3 rounded-md bg-primary"
//     onClick={() => setSidebarOpen(!isSidebarOpen)} // Toggle sidebar on click
//   >
//     <Menu className="w-6 h-6" /> {/* Hamburger Icon */}
//   </button>

//   {/* Dynamic Page Title */}
//   <h1 className="text-3xl text-primary font-bold w-full text-center">
//             {getPageTitle()}
//           </h1>
// </div>
//       {/* Sidebar */}
//       <aside
//         className={`xl:w-[420px] lg:h-[93%] h-screen lg:m-7 bg-white p-8 flex flex-col lg: rounded-2xl justify-between lg:flex fixed top-0 left-0 z-50 lg:translate-x-0 lg:w-[350px] transition-transform duration-300 transform ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         {/* Close Icon for Mobile View */}
//         <div className="lg:hidden flex justify-end">
//           <button
//             onClick={closeSidebar} // Close the sidebar when close button is clicked
//             className="text-gray-700"
//           >
//             <X className="w-6 h-6" /> {/* Close icon */}
//           </button>
//         </div>

//         {/* Profile Section */}
//         <div>
//           <div className="flex items-center mb-6">
//             <Image
//               src="https://via.placeholder.com/80"
//               alt="Profile"
//               className="w-20 h-20 rounded-full object-cover mr-4"
//             />
//             <div>
//               <div className="text-2xl font-bold text-primary">KimLa</div>
//               <div className="text-gray-400 pt-2 text-md">kimla123@gmail.com</div>
//             </div>
//           </div>

//           {/* Button List */}
//           <div className="space-y-5">
//             <ButtonProfile
//               text="Test History"
//               subText="View your History Test"
//               icon={<History className="text-white text-md" />}
//               backgroundColor="bg-white"
//               iconBackgroundColor="bg-yellow-400"
//               isActive={activeButton === 'profile-quiz-history'}
//               onClick={() => handleButtonClick('profile-quiz-history', '/profile-quiz-history')}
//             />
//             <ButtonProfile
//               text="Draft Test"
//               subText="View Your Test Draft"
//               icon={<Archive className="text-white text-md" />}
//               backgroundColor="bg-white"
//               iconBackgroundColor="bg-[#3AC8A0]"
//               isActive={activeButton === 'profile-draft'}
//               onClick={() => handleButtonClick('profile-draft', '/profile-draft')}
//             />
//             <ButtonProfile
//               text="About You"
//               subText="View Your Profile"
//               icon={<User className="text-white text-md" />}
//               backgroundColor="bg-white"
//               iconBackgroundColor="bg-red-400"
//               isActive={activeButton === 'profile-about-user'}
//               onClick={() => handleButtonClick('profile-about-user', '/profile-about-user')}
//             />
//           </div>
//         </div>

//         {/* Logout Button */}
//         <div className="pt-6 mt-6">
//           <ButtonProfile
//             text="Logout"
//             subText=""
//             icon={<LogOut className="text-primary text-lg" />}
//             iconBackgroundColor=""
//             isActive={activeButton === 'logout'}
//             onClick={() => handleButtonClick('logout', '/logout')}
//           />
//         </div>
//       </aside>

//       {/* Backdrop for Mobile Sidebar */}
//       <div
//         className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 md:hidden ${
//           isSidebarOpen ? 'block' : 'hidden'
//         }`}
//         onClick={closeSidebar} // Close the sidebar when backdrop is clicked
//       />
//     </div>
//     </div>
//   );
// };

// export default SideBarProfileComponent;

'use client';
import React, { useState } from 'react';
import ButtonProfile from './ButtonProfile';
import { History, Archive, User, LogOut, Menu, X } from 'lucide-react'; // Added X for close icon
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const SideBarProfileComponent = () => {
  const [activeButton, setActiveButton] = useState<string>('profile-quiz-history'); // State to track the active button
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false); // State for mobile sidebar toggle
  const [isModalOpen, setModalOpen] = useState<boolean>(false); // State for modal visibility
  const router = useRouter();
  const pathname = usePathname(); // Get the current route
  const getPageTitle = () => {
    switch (pathname) {
      case '/profile-quiz-history':
        return 'Test History';
      case '/profile-draft':
        return 'Draft Test';
      case '/profile-about-user':
        return 'Information';
      default:
        return '/profile-quiz-history';
    }
  };
  const handleButtonClick = (buttonName: string, path: string) => {
    setActiveButton(buttonName);
    router.push(path); // Navigate to the specified route
  };

  const closeSidebar = () => {
    setSidebarOpen(false); // Close the sidebar
    setModalOpen(false);   // Close the modal if it was open
  };

  return (
    <div className=''>
      <div className="flex flex-col h-screen">
        <div className="lg:hidden flex justify-between items-center w-full p-4 text-white rounded-xl fixed top-0 left-0 right-0 z-50 bg-white">
          {/* Hamburger Icon */}
          <button
            className="flex items-center space-x-2 text-lg font-bold p-3 rounded-md bg-primary"
            onClick={() => setSidebarOpen(!isSidebarOpen)} // Toggle sidebar on click
          >
            <Menu className="w-6 h-6" /> {/* Hamburger Icon */}
          </button>

          {/* Dynamic Page Title */}
          <h1 className="text-3xl text-primary font-bold w-full text-center">
            {getPageTitle()}
          </h1>
        </div>

        {/* Sidebar */}
        <aside
          className={`xl:w-[420px] lg:h-[93%] h-screen lg:m-7 bg-white p-8 flex flex-col lg:rounded-2xl justify-between lg:flex fixed top-0 left-0 z-50 lg:translate-x-0 lg:w-[350px] transition-transform duration-300 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Close Icon for Mobile View */}
          <div className="lg:hidden flex justify-end">
            <button
              onClick={closeSidebar} // Close the sidebar when close button is clicked
              className="text-gray-700"
            >
              <X className="w-6 h-6" /> {/* Close icon */}
            </button>
          </div>

          {/* Profile Section */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="https://via.placeholder.com/80"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover mr-4"
              />
              <div>
                <div className="text-2xl font-bold text-primary">KimLa</div>
                <div className="text-gray-400 pt-2 text-md">kimla123@gmail.com</div>
              </div>
            </div>

            {/* Button List */}
            <div className="space-y-5">
              <ButtonProfile
                text="Test History"
                subText="View your History Test"
                icon={<History className="text-white text-md" />}
                backgroundColor="bg-white"
                iconBackgroundColor="bg-yellow-400"
                isActive={activeButton === 'profile-quiz-history'}
                onClick={() => handleButtonClick('profile-quiz-history', '/profile-quiz-history')}
              />
              <ButtonProfile
                text="Draft Test"
                subText="View Your Test Draft"
                icon={<Archive className="text-white text-md" />}
                backgroundColor="bg-white"
                iconBackgroundColor="bg-[#3AC8A0]"
                isActive={activeButton === 'profile-draft'}
                onClick={() => handleButtonClick('profile-draft', '/profile-draft')}
              />
              <ButtonProfile
                text="About You"
                subText="View Your Profile"
                icon={<User className="text-white text-md" />}
                backgroundColor="bg-white"
                iconBackgroundColor="bg-red-400"
                isActive={activeButton === 'profile-about-user'}
                onClick={() => handleButtonClick('profile-about-user', '/profile-about-user')}
              />
            </div>
          </div>

          {/* Logout Button */}
          <div className="pt-6 mt-6">
            <ButtonProfile
              text="Logout"
              subText=""
              icon={<LogOut className="text-primary text-lg" />}
              iconBackgroundColor=""
              isActive={activeButton === 'logout'}
              onClick={() => handleButtonClick('logout', '/logout')}
            />
          </div>
        </aside>

        {/* Backdrop for Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 md:hidden ${
            isSidebarOpen ? 'block' : 'hidden'
          }`}
          onClick={closeSidebar} // Close the sidebar when backdrop is clicked
        />

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50 md:hidden">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setModalOpen(false)} // Close modal when clicked
                className="text-white"
              >
                <X className="w-6 h-6" /> {/* Close modal icon */}
              </button>
            </div>

            <div className="bg-white p-8 w-full sm:w-[80%] mx-auto rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Test History</h2>
              <p>Your test history and more content goes here.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBarProfileComponent;
