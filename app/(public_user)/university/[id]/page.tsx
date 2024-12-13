"use client";
import CardUniversityDetail from "@/components/UniversityComponent/CardUniversityDetail";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Type definition for universities
type UniversityType = {
    uuid: string;
    kh_name: string;
    en_name: string;
    location: string;
    province_name: string;
    popular_major: string;
    logo_url: string;
    cover_image: string | null;  // Handle null value
    phone: string;
    lowest_price: number;
    highest_price: number;
    map: string;
    email: string;
    website: string;
    description: string;
    mission: string;
    vision: string;
    majors: string[];  // Handle empty array
  };

export default function page({ params }: { params: { id: string } }) {
  const [universities, setUniversities] = useState<UniversityType[]>([]); // Initialize as empty array
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch universities on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_NORMPLOV_API_URL}schools/${params.id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log("API Response:", data); // Log the entire response to inspect its structure

        // Check if the payload is correct and contains the university data
        if (data && data.payload) {
            setUniversities([data.payload]); // Set the university data from payload (as an array)
          } else {
            console.error("No valid university data found:", data);
            setError("Data format error: No valid university data found");
          }
        } catch (error: any) {
          console.error("Error fetching data:", error);
          setError(error.message || "Something went wrong while fetching data");
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {universities.length > 0 ? (
        universities.map((university, index) => (
          <CardUniversityDetail
            key={university.uuid}
            uuid={university.uuid}
            kh_name={university.kh_name}
            en_name={university.en_name}
            province_name={university.province_name}
            popular_major={university.popular_major}
            location={university.location}
            logo_url={university.logo_url}
            cover_image={university.cover_image || "/default_cover_image.png"} 
            phone={university.phone}
            lowest_price={university.lowest_price}
            highest_price={university.highest_price}
            map={university.map || "No map available"}
            email={university.email}
            website={university.website}
            description={university.description}
            mission={university.mission}
            vision={university.vision}
            majors={university.majors.length > 0 ? university.majors : ["No majors available"]}  // Handle empty majors array
          />
        ))
      ) : (
        <div>No universities found</div> // Show this if the universities array is empty
      )}
    </div>
  );
}
