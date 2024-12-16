// 'use client'
// import React ,{useState}from "react";
// import DynamicTestCard from "./TestCard";
// import { Eye, Copy, Trash } from "lucide-react";
// import { useGetAllUserTestQuery } from "@/redux/service/test";

// const TestList = () => {
//   const [currentPage, setCurrentPage] = useState(1);  // Track current page
//   const handleAction = (actionKey: string, title: string) => {
//     alert(`${actionKey} clicked for ${title}`);
//   };
//   const { data, isLoading, error } = useGetAllUserTestQuery({
//     page: currentPage,  // You can dynamically set page if needed
//     page_size: 10,
//   });
//   const actions = [
//     {
//       label: "View",
//       icon: <Eye className="w-4 h-4 text-green-600" />,
//       actionKey: "view",
//       onClick: handleAction,
//     },
//     {
//       label: "Copy",
//       icon: <Copy className="w-4 h-4 text-blue-600" />,
//       actionKey: "copy",
//       onClick: handleAction,
//     },
//     {
//       label: "Delete",
//       icon: <Trash className="w-4 h-4 text-red-600" />,
//       actionKey: "delete",
//       onClick: handleAction,
//     },
//   ];
//   const colors = [
//     "bg-orange-500",
//     "bg-blue-500",
//     "bg-green-500",
//     "bg-yellow-500",
//     "bg-purple-500",
//     "bg-pink-500",
//     "bg-amber-500",
//     "bg-lime-500",
//     "bg-emerald-500",
//     "bg-teal-500",
//     "bg-cyan-500",
//     "bg-sky-500",
//     "bg-indigo-500",
//     "bg-violet-500",
//     "bg-fuchsia-500",
//     "bg-rose-500",
//   ];
//   // Handle page change
//   const handlePageChange = (newPage: number) => {
//     if (newPage > 0 && newPage <= data?.payload.metadata.total_pages) {
//       setCurrentPage(newPage);
//     }
//   };
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error fetching tests. Please try again later.</div>;
//   }

//   // Map the tests data from API to DynamicTestCard components with random background color
//   const testCards = data?.payload.items?.map((test,index) => {
//     const backgroundColor = colors[index % colors.length];  // Cycle through the colors


//     return (
//       <DynamicTestCard
//         key={test.test_uuid}
//         title={test.test_name}
//         description={test.is_completed ? 'Completed' : 'Not Completed'}
//         date={test.created_at}
//         actions={actions}
//         backgroundColor={backgroundColor}  // Pass the dynamic random background color
//       />
//     );
//   });

//   return (
//     <div className="w-full">
//       <div className="grid gap-4 grid-cols-1 w-full">
//         {testCards}
//       </div>
//     </div>
//   );
// };

// export default TestList;


// 'use client'
// import React, { useState } from "react";
// import DynamicTestCard from "./TestCard";
// import { Eye, Copy, Trash } from "lucide-react";
// import { useGetAllUserTestQuery } from "@/redux/service/test";
// import Pagination from "./Pagination";

// const TestList = () => {
//   const [currentPage, setCurrentPage] = useState(1);  // Track current page
//   const [itemsPerPage, setItemsPerPage] = useState(5); // Rows per page state
//   const totalPages = 5; // Example, replace with actual data
//   const { data, isLoading, error } = useGetAllUserTestQuery({
//     page: currentPage,  // Pass current page
//     page_size: itemsPerPage,
//   });

//   const actions = [
//     {
//       label: "View",
//       icon: <Eye className="w-4 h-4 text-green-600" />,
//       actionKey: "view",
//       onClick: (actionKey: string, title: string) => alert(`${actionKey} clicked for ${title}`),
//     },
//     {
//       label: "Copy",
//       icon: <Copy className="w-4 h-4 text-blue-600" />,
//       actionKey: "copy",
//       onClick: (actionKey: string, title: string) => alert(`${actionKey} clicked for ${title}`),
//     },
//     {
//       label: "Delete",
//       icon: <Trash className="w-4 h-4 text-red-600" />,
//       actionKey: "delete",
//       onClick: (actionKey: string, title: string) => alert(`${actionKey} clicked for ${title}`),
//     },
//   ];

//   const colors = [
//     "bg-orange-500",
//     "bg-blue-500",
//     "bg-green-500",
//     "bg-yellow-500",
//     "bg-purple-500",
//     "bg-pink-500",
//     "bg-amber-500",
//     "bg-lime-500",
//     "bg-emerald-500",
//     "bg-teal-500",
//     "bg-cyan-500",
//     "bg-sky-500",
//     "bg-indigo-500",
//     "bg-violet-500",
//     "bg-fuchsia-500",
//     "bg-rose-500",
//   ];

//   // Handle page change
//   // const handlePageChange = (newPage: number) => {
//   //   if (newPage > 0 && newPage <= (data?.payload.metadata.total_pages || 1)) {
//   //     setCurrentPage(newPage);
//   //   }
//   // };


//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error fetching tests. Please try again later.</div>;
//   }

//   // Map the tests data from API to DynamicTestCard components with dynamic background color
//   const testCards = data?.payload.items?.map((test, index) => {
//     const backgroundColor = colors[index % colors.length];  // Cycle through the colors

//     return (
//       <DynamicTestCard
//         key={test.test_uuid}
//         title={test.test_name}
//         assessment_type_name={test.assessment_type_name}
//         date={test.created_at}
//         actions={actions}
//         backgroundColor={backgroundColor}
//       />
//     );
//   });

//   return (
//     <div className="w-full h-screen bg-yellow-300 ">
//       <div className="grid gap-4 grid-cols-1 w-full mb-5">
//         {testCards}
//       </div>
//       <div>
//         <Pagination
        
//         />
//       </div>
     
//       {/* Pagination Controls */}
//       {/* {data?.payload.metadata && (
//         <div className="flex bg-red-300 justify-between mt-4">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-4 py-2 bg-gray-300 rounded-lg disabled:bg-gray-400"
//           >
//             Previous
//           </button>

//           <span className="self-center text-lg">
//             Page {currentPage} of {data.payload.metadata.total_pages}
//           </span>

//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === data.payload.metadata.total_pages}
//             className="px-4 py-2 bg-gray-300 rounded-lg disabled:bg-gray-400"
//           >
//             Next
//           </button>
//         </div>
//       )} */}


  
//     </div>
//   );
// };

// export default TestList;



// 'use client'
// import React, { useState } from "react";
// import DynamicTestCard from "./TestCard";
// import { Eye, Copy, Trash } from "lucide-react";
// import { useGetAllUserTestQuery } from "@/redux/service/test";
// import Pagination from "./Pagination";

// const TestList = () => {
//   const [currentPage, setCurrentPage] = useState(1);  // Track current page
//   const [itemsPerPage, setItemsPerPage] = useState(6); // Rows per page state
//   const totalPages = 5; // Example, replace with actual data

//   const { data, isLoading, error } = useGetAllUserTestQuery({
//     page: currentPage,  // Pass current page
//     page_size: itemsPerPage,
//   });

//   const actions = [
//     {
//       label: "View",
//       icon: <Eye className="w-4 h-4 text-green-600" />,
//       actionKey: "view",
//       onClick: (actionKey: string, title: string) => alert(`${actionKey} clicked for ${title}`),
//     },
//     {
//       label: "Copy",
//       icon: <Copy className="w-4 h-4 text-blue-600" />,
//       actionKey: "copy",
//       onClick: (actionKey: string, title: string) => alert(`${actionKey} clicked for ${title}`),
//     },
//     {
//       label: "Delete",
//       icon: <Trash className="w-4 h-4 text-red-600" />,
//       actionKey: "delete",
//       onClick: (actionKey: string, title: string) => alert(`${actionKey} clicked for ${title}`),
//     },
//   ];

//   const colors = [
//     "bg-orange-500",
//     "bg-blue-500",
//     "bg-green-500",
//     "bg-yellow-500",
//     "bg-purple-500",
//     "bg-pink-500",
//     "bg-amber-500",
//     "bg-lime-500",
//     "bg-emerald-500",
//     "bg-teal-500",
//     "bg-cyan-500",
//     "bg-sky-500",
//     "bg-indigo-500",
//     "bg-violet-500",
//     "bg-fuchsia-500",
//     "bg-rose-500",
//   ];

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error fetching tests. Please try again later.</div>;
//   }

//   // Map the tests data from API to DynamicTestCard components with dynamic background color
//   const testCards = data?.payload.items?.map((test, index) => {
//     const backgroundColor = colors[index % colors.length];  // Cycle through the colors

//     return (
//       <DynamicTestCard
//         key={test.test_uuid}
//         title={test.test_name}
//         assessment_type_name={test.assessment_type_name}
//         date={test.created_at}
//         actions={actions}
//         backgroundColor={backgroundColor}
//       />
//     );
//   });

//   return (
//     <div className="w-full h-screen bg-yellow-300">
//       <div className="grid gap-4 grid-cols-1 w-full mb-5">
//         {testCards}
//       </div>

//       {/* Pagination Component */}
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         setCurrentPage={setCurrentPage}
//         itemsPerPage={itemsPerPage}
//         setItemsPerPage={setItemsPerPage}
//       />
//     </div>
//   );
// };

// export default TestList;

// 'use client'
// import React, { useState } from "react";
// import DynamicTestCard from "./TestCard";
// import { Eye, Copy, Trash } from "lucide-react";
// import { useGetAllUserTestQuery } from "@/redux/service/test";
// import Pagination from "./Pagination";

// const TestList = () => {
//   const [currentPage, setCurrentPage] = useState(1);  // Track current page
//   const [itemsPerPage, setItemsPerPage] = useState(6); // Rows per page state

//   const { data, isLoading, error } = useGetAllUserTestQuery({
//     page: currentPage,  // Pass current page
//     page_size: itemsPerPage,
//   });

//   // Calculate total pages dynamically based on total items and items per page
//   const totalItems = data?.payload.metadata.total_items || 0; // Access metadata.total_items
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const actions = [
//     {
//       label: "View",
//       icon: <Eye className="w-4 h-4 text-green-600" />,
//       actionKey: "view",
//       onClick: (actionKey: string, title: string) => alert(`${actionKey} clicked for ${title}`),
//     },
//     {
//       label: "Copy",
//       icon: <Copy className="w-4 h-4 text-blue-600" />,
//       actionKey: "copy",
//       onClick: (actionKey: string, title: string) => alert(`${actionKey} clicked for ${title}`),
//     },
//     {
//       label: "Delete",
//       icon: <Trash className="w-4 h-4 text-red-600" />,
//       actionKey: "delete",
//       onClick: (actionKey: string, title: string) => alert(`${actionKey} clicked for ${title}`),
//     },
//   ];

//   const colors = [
//     "bg-orange-500",
//     "bg-blue-500",
//     "bg-green-500",
//     "bg-yellow-500",
//     "bg-purple-500",
//     "bg-pink-500",
//     "bg-amber-500",
//     "bg-lime-500",
//     "bg-emerald-500",
//     "bg-teal-500",
//     "bg-cyan-500",
//     "bg-sky-500",
//     "bg-indigo-500",
//     "bg-violet-500",
//     "bg-fuchsia-500",
//     "bg-rose-500",
//   ];

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error fetching tests. Please try again later.</div>;
//   }

//   // Map the tests data from API to DynamicTestCard components with dynamic background color
//   const testCards = data?.payload.items?.map((test, index) => {
//     const backgroundColor = colors[index % colors.length];  // Cycle through the colors

//     return (
//       <DynamicTestCard
//         key={test.test_uuid}
//         title={test.test_name}
//         assessment_type_name={test.assessment_type_name}
//         date={test.created_at}
//         actions={actions}
//         backgroundColor={backgroundColor}
//       />
//     );
//   });

//   return (
//     <div className="w-full h-screen relative ">
//       <div className="grid gap-4 grid-cols-1 w-full mb-5">
//         {testCards}
//       </div>

//       <div className="bottom-0 absolute right-0">
//         {/* Pagination Component */}
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages} // Dynamic total pages
//         setCurrentPage={setCurrentPage}
//         itemsPerPage={itemsPerPage}
//         setItemsPerPage={setItemsPerPage}
//       />
//       </div>
//     </div>
//   );
// };

// export default TestList;


// 'use client'
// import React, { useState } from "react";
// import DynamicTestCard from "./TestCard";
// import { Eye, Copy, Trash } from "lucide-react";
// import { useGetAllUserTestQuery, useDeleteUserTestMutation } from "@/redux/service/test";
// import Pagination from "./Pagination";

// const TestList = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(6);

//   // Fetch tests
//   const { data, isLoading, error, refetch } = useGetAllUserTestQuery({
//     page: currentPage,
//     page_size: itemsPerPage,
//   });

//   // Delete mutation
//   const [deleteUserTest] = useDeleteUserTestMutation();

//   // Calculate total pages dynamically
//   const totalItems = data?.payload.metadata.total_items || 0;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const handleDeleteTest = async (uuid: string, title: string) => {
//     if (confirm(`Are you sure you want to delete the test: "${title}"?`)) {
//       try {
//         await deleteUserTest({ uuid }).unwrap();
//         alert(`Test "${title}" deleted successfully.`);
//         refetch(); // Refetch the list after successful deletion
//       } catch (error) {
//         console.error("Failed to delete test:", error);
//         alert("Failed to delete test. Please try again.");
//       }
//     }
//   };

//   const actions = [
//     {
//       label: "View",
//       icon: <Eye className="w-4 h-4 text-green-600" />,
//       actionKey: "view",
//       onClick: (actionKey: string, title: string) => alert(`${actionKey} clicked for ${title}`),
//     },
//     {
//       label: "Copy",
//       icon: <Copy className="w-4 h-4 text-blue-600" />,
//       actionKey: "copy",
//       onClick: (actionKey: string, title: string) => alert(`${actionKey} clicked for ${title}`),
//     },
//     {
//       label: "Delete",
//       icon: <Trash className="w-4 h-4 text-red-600" />,
//       actionKey: "delete",
//       onClick: (actionKey: string, title: string, uuid: string) => handleDeleteTest(uuid, title),
//     },
//   ];

//   const colors = ["bg-orange-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"];

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error fetching tests. Please try again later.</div>;
//   }

//   const testCards = data?.payload.items?.map((test, index) => {
//     const backgroundColor = colors[index % colors.length];

//     return (
//       <DynamicTestCard
//         key={test.test_uuid}
//         title={test.test_name}
//         assessment_type_name={test.assessment_type_name}
//         date={test.created_at}
//         actions={actions.map((action) => ({
//           ...action,
//           onClick: () => action.onClick(action.actionKey, test.test_name, test.test_uuid),
//         }))}
//         backgroundColor={backgroundColor}
//       />
//     );
//   });

//   return (
//     <div className="w-full h-screen relative">
//       <div className="grid gap-4 grid-cols-1 w-full mb-5">
//         {testCards}
//       </div>

//       <div className="bottom-0 absolute right-0">
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           setCurrentPage={setCurrentPage}
//           itemsPerPage={itemsPerPage}
//           setItemsPerPage={setItemsPerPage}
//         />
//       </div>
//     </div>
//   );
// };

// export default TestList;

'use client'
import React, { useState } from "react";
import DynamicTestCard from "./TestCard";
import { Eye, Copy, Trash } from "lucide-react";
import { useGetAllUserTestQuery, useDeleteUserTestMutation } from "@/redux/service/test";
import Pagination from "./Pagination";
import DeleteConfirmationModal from "./DeleteComfirmModal";


const TestList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Fetch tests
  const { data,  refetch } = useGetAllUserTestQuery({
    page: currentPage,
    page_size: itemsPerPage,
  });

  // Delete mutation
  const [deleteUserTest] = useDeleteUserTestMutation();

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState<{ uuid: string; title: string } | null>(null);

  // Open modal when delete is triggered
  const openDeleteModal = (uuid: string, title: string) => {
    setSelectedTest({ uuid, title });
    setIsModalOpen(true);
  };

  // Handle delete
  const handleDelete = async () => {
    if (selectedTest) {
      await deleteUserTest({ uuid: selectedTest.uuid }).unwrap();
      setIsModalOpen(false);
      refetch(); // Refresh the test list after delete
    }
  };

  const actions = [
    {
      label: "View",
      icon: <Eye className="w-4 h-4 text-green-600" />,
      actionKey: "view",
      onClick: () => {},
    },
    {
      label: "Copy",
      icon: <Copy className="w-4 h-4 text-blue-600" />,
      actionKey: "copy",
      onClick: () => {},
    },
    {
      label: "Delete",
      icon: <Trash className="w-4 h-4 text-red-600" />,
      actionKey: "delete",
      onClick: (uuid: string, title: string) => openDeleteModal(uuid, title),
    },
  ];
    const colors = [
    "bg-orange-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-amber-500",
    "bg-lime-500",
    "bg-emerald-500",
    "bg-teal-500",
    "bg-cyan-500",
    "bg-sky-500",
    "bg-indigo-500",
    "bg-violet-500",
    "bg-fuchsia-500",
    "bg-rose-500",
  ]
  const testCards = data?.payload.items?.map((test,index) => {
        const backgroundColor = colors[index % colors.length];  // Cycle through the colors
       return(
        <DynamicTestCard
        key={test.test_uuid}
        title={test.test_name}
        assessment_type_name={test.assessment_type_name}
        date={test.created_at}
        actions={actions.map((action) => ({
          ...action,
          onClick: () => action.onClick(test.test_uuid, test.test_name),
        }))}
        backgroundColor={backgroundColor}
      />
       )
    });

  return (
    <div className="relative h-screen">
      <div className="grid gap-4 grid-cols-1 mb-5">{testCards}</div>

      {/* Pagination */}
      <div className="absolute right-0 bottom-0">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil((data?.payload.metadata.total_items || 0) / itemsPerPage)}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
        />
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        title={selectedTest?.title || ""}
      />
    </div>
  );
};
export default TestList;
