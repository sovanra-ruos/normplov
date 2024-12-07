// import React, { useState } from "react";
// import { MoreHorizontal } from "lucide-react";
// import { MdOutlineQuiz } from "react-icons/md";

// type Action = {
//   label: string;
//   icon: JSX.Element;
//   actionKey: string;
//   onClick: (actionKey: string, title: string) => void;
// };

// type TestCardProps = {
//   title: string;
//   description: string;
//   date: string;
//   actions: Action[];
// };

// const DynamicTestCard = ({ title, description, date, actions }: TestCardProps) => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <div className="flex justify-between items-center p-4 bg-white rounded-lg ">
//       {/* Icon and Content */}
//       <div className="flex items-center">
//         <div className="flex justify-center items-center w-12 h-12 rounded-full bg-primary">
//           <span className="text-white font-bold text-3xl"><MdOutlineQuiz /></span>
//         </div>
//         <div className="ml-4">
//           <h3 className="text-2xl font-bold text-primary">{title}</h3>
//           <p className="text-md text-textprimary">{description}</p>
//           <p className="text-sm text-gray-400">{date}</p>
//         </div>
//       </div>

//       {/* Dropdown */}
//       <div className="relative">
//         <button
//           className="p-2 rounded-full text-primary hover:bg-[#F3FBF9]"
//           onClick={() => setDropdownOpen(!isDropdownOpen)}
//         >
//           <MoreHorizontal className="w-7 h-" />
//         </button>

//         {isDropdownOpen && (
//           <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-lg ">
//             {actions.map((action) => (
//               <button
//                 key={action.actionKey}
//                 className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-[#F3FBF9] w-full"
//                 onClick={() => {
//                   action.onClick(action.actionKey, title);
//                   setDropdownOpen(false); // Close dropdown after action
//                 }}
//               >
//                 {action.icon} {action.label}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DynamicTestCard;


import React, { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { MdOutlineQuiz } from "react-icons/md";

type Action = {
  label: string;
  icon: JSX.Element;
  actionKey: string;
  onClick: (actionKey: string, title: string) => void;
};

type TestCardProps = {
  title: string;
  description: string;
  date: string;
  actions: Action[];
  backgroundColor: string; // Add a dynamic background color prop
};

const DynamicTestCard = ({ title, description, date, actions, backgroundColor }: TestCardProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-3 bg-white rounded-lg w-full">
      {/* Icon and Content */}
      <div className="flex items-center">
        <div
          className={`flex justify-center items-center w-11 h-11 rounded-full -mt-6 ${backgroundColor}`}
        >
          <span className="text-white font-bold text-2xl">
            <MdOutlineQuiz />
          </span>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold text-primary">{title}</h3>
          <p className="text-md text-textprimary">{description}</p>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>

      {/* Dropdown */}
      <div className="relative">
        <button
          className="p-2 rounded-full text-primary hover:bg-[#F3FBF9]"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          <MoreHorizontal className="w-7 h-7" />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-lg shadow-lg">
            {actions.map((action) => (
              <button
                key={action.actionKey}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-[#F3FBF9] w-full"
                onClick={() => {
                  action.onClick(action.actionKey, title);
                  setDropdownOpen(false); // Close dropdown after action
                }}
              >
                {action.icon} {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicTestCard;
