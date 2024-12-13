"use client";
import CardUniversity from "@/components/UniversityComponent/CardUniversity";
import UniversityMainContainer from "@/components/UniversityComponent/UniversityMainContainer";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
// Import JSON for university data (simulating your approach with quiz data)
//import universityJson from "@/app/(public_user)/json/universityData.json";
// Type definition for dropdown options
type OptionType = {
  value: string;
  label: string;
};

// Type definition for universities
type UniversityType = {
  uuid: string;
  kh_name: string;
  en_name: string;
  location: string;
  province_name: string;
  popular_major: string;
  logo_url: string;
};

export default function Page() {
  const router = useRouter();
  // Lift the state for selectedUniversity here
  const [selectedUniversity, setSelectedUniversity] =
    useState<OptionType | null>(null);
  const [universities, setUniversities] = useState<UniversityType[]>([]); // Initialize as empty array
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch universities on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_NORMPLOV_API_URL}schools`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log("API Response:", data); // Log the entire response to inspect its structure

        // Ensure 'schools' is an array inside the 'payload' object before setting it
        if (data && Array.isArray(data.payload.schools)) {
          setUniversities(data.payload.schools); // Set universities from payload.schools
        } else {
          console.error("No schools found in response:", data);
          setError("Data format error: No schools found");
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching data:", error.message);
          setError(error.message || "Something went wrong while fetching data");
        } else {
          console.error("An unexpected error occurred", error);
          setError("Something went wrong while fetching data");
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  //------------------------------------------------------------------------------------------------

  const handleCardClick = (id: string) => {
    router.push(`/university/${id}`);
    
  }; 

  return (
    <div className="mb-5">
      <UniversityMainContainer
        selectedUniversity={selectedUniversity}
        setSelectedUniversity={setSelectedUniversity}
      />
      <section className="flex justify-center ">
        <div className="w-[80%]">
          <div>
            <h1 className="text-2xl w-[90%] lg:w-full md:w-full md:text-4xl lg:text-4xl font-bold lg:text-start md:text-center text-center mb-2 text-textprimary">
              {selectedUniversity?.label
                ? `${selectedUniversity.label}`
                : "សាកលវិទ្យាល័យរដ្ឋ និងឯកជន"}
            </h1>
          </div>
          <div className=" mx-auto my-4 md:my-6 mt-20  grid w-auto auto-rows-fr grid-cols-1 lg:gap-8 md:gap-8 gap-4 sm:mt-12 lg:grid-cols-2 md:grid-cols-1">
            {universities.length > 0 ? (
              universities.map((university, index) => (
                <CardUniversity
                  key={index}
                  kh_name={university.kh_name}
                  en_name={university.en_name}
                  location={university.location}
                  popular_major={university.popular_major}
                  logo_url={university.logo_url}
                  onClick={() => handleCardClick(university.uuid)}
                />
              ))
            ) : (
              <div>No universities found</div> // Show this if the universities array is empty
            )}
          </div>
          <div className="mt-8 mb-4 flex  justify-center">
            <div className="flex space-x-4">
              <button
                className="rounded-xl mx-1  px-3 py-2 bg-gray-200 text-gray-500 font-medium  cursor-not-allowed"
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
