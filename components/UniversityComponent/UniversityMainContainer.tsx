"use client"
import { FaSearch } from "react-icons/fa";
import Select from "react-select";
import React from "react";

// Define types for dropdown options
type OptionType = {
  value: string;
  label: string;
};

type Props = {
  selectedUniversity: OptionType | null;
  setSelectedUniversity: React.Dispatch<
    React.SetStateAction<OptionType | null>
  >;
};

export default function UniversityMainContainer({
  selectedUniversity,
  setSelectedUniversity,
}: Props) {
  // Dropdown options
  const universityOptions: OptionType[] = [
    { value: "1", label: "សាកលវិទ្យាល័យរដ្ឋ" },
    { value: "2", label: "សាកលវិទ្យាល័យឯកជន" },
    { value: "3", label: "វិទ្យាស្ថានបបណ្តុះបណ្តាល" },
  ];

  const locationOptions: OptionType[] = [
    { value: "phnom-penh", label: "រាជធានីភ្នំពេញ" },
    { value: "battambang", label: "បាត់ដំបង" },
    { value: "siem-reap", label: "សៀមរាប" },
  ];

  const handleUniversityChange = (selectedOption: OptionType | null) => {
    setSelectedUniversity(selectedOption);
  };

  return (
    <div className="relative min-h-[300px] w-full">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-96"
        style={{
          backgroundImage: 'url("/assets/bg-uni.jpg")',
        }}
      ></div>

      {/* Content */}
      <div className="container relative z-10  mx-auto px-4 py-32">
        <h1 className="text-4xl md:text-4xl lg:text-5xl bordered-text font-bold text-white text-center mb-8">
          ស្វែងរកគ្រឹះស្ថានសិក្សាទៅកម្ពុជា
        </h1>

        <div className=" max-w-4xl mx-auto  space-y-4">
          {/* Search input */}
          <div className="flex">
            <input
              type="text"
              placeholder="ស្វែងរកទីនេះ....."
              className="flex-1 px-5 py-2 rounded-full border-0 focus:ring-2"
            />
            <div className="rounded-r-lg px-0.5 py-1 -ml-11">
              <button
                type="button"
                className="px-2 py-4 mr-2 flex justify-center items-center bg-primary rounded-full w-9 h-9 text-white transition-colors"
              >
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              options={universityOptions}
              placeholder="សាកលវិទ្យាល័យទាំងអស់"
              value={selectedUniversity}
              onChange={handleUniversityChange}
              className="rounded-full"
              isClearable
            />
            <Select
              options={locationOptions}
              value={selectedUniversity}
              onChange={handleUniversityChange}
              placeholder="រាជធានីភ្នំពេញ"
              isClearable
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
