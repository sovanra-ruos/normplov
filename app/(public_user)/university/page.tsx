"use client";
import CardUniversity from "@/components/ui/CardUniversity";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Select from "react-select";

// Define types for dropdown options
type OptionType = {
  value: string;
  label: string;
};

export default function Page() {
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

  // State for dropdown selections with proper types
  const [selectedUniversity, setSelectedUniversity] =
    useState<OptionType | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<OptionType | null>(
    null
  );

  const handleUniversityChange = (selectedOption: OptionType | null) => {
    setSelectedUniversity(selectedOption);
    console.log("Selected University:", selectedOption);
  };

  const handleLocationChange = (selectedOption: OptionType | null) => {
    setSelectedLocation(selectedOption);
    console.log("Selected Location:", selectedOption);
  };

  return (
    <div className="mb-5">
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

          <div className=" mx-auto max-w-4xl space-y-4">
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
                placeholder="សាកលវិទ្យាល័យ"
                value={selectedUniversity}
                onChange={handleUniversityChange}
                className="rounded-full"
                isClearable
              />
              <Select
                options={locationOptions}
                placeholder="រាជធានីភ្នំពេញ"
                value={selectedLocation}
                onChange={handleLocationChange}
                className="rounded-full"
                isClearable
              />
            </div>
          </div>
        </div>
      </div>
      <section className="flex justify-center ">
        <div className="w-[80%]">
          <div>
            <h1 className="text-2xl w-[90%] lg:w-full md:w-full md:text-4xl lg:text-4xl font-bold lg:text-start md:text-center text-center mb-2 text-textprimary">
              {selectedUniversity?.label
                ? `${selectedUniversity.label}`
                : "សាកលវិទ្យាល័យរដ្ឋ និងឯកជន"}
            </h1>
          </div>
          <CardUniversity />
          <div className="mt-8 mb-4 flex  justify-center">
            <div className="flex space-x-4">
              <button
                className="mx-1 rounded-xl px-3 py-2 bg-gray-200 text-gray-500 font-medium  cursor-not-allowed"
                disabled
              >
                ថយក្រោយ
              </button>

              <a
                href="#"
                className="mx-1 rounded-full px-3 py-2 bg-gray-200 text-gray-700  hover:bg-blue-500 hover:text-gray-200 "
              >
                1
              </a>
              <a
                href="#"
                className="mx-1 px-3 py-2 rounded-xl bg-gray-200 text-gray-700 font-medium hover:bg-blue-500 hover:text-gray-200 "
              >
                បន្ទាប់
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
