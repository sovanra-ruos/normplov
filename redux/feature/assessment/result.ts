import { normPlovApi } from '@/redux/api'; // Import the main API instance

// export const resultApi = normPlovApi.injectEndpoints({
//   endpoints: (builder) => ({
//     fetchAssessmentDetails: builder.query({
//       query: (testUUID: string) => ({
//         url: `test/${testUUID}`, // Dynamic query parameter
//         method: 'GET',
//       }),
//       // // transformResponse: (response: any) => {
//       // //   const { responses } = response.payload;
//       // //   console.log("Response from API:", response);

//       // //   return responses?.map((res: any) => {
//       // //     const parsedData = JSON.parse(res.response_data);
//       // //     return {
//       // //       assessmentType: res.assessment_type,
//       // //       testUUID: parsedData.test_uuid,
//       // //       testName: parsedData.test_name,
//       // //       createdAt: res.created_at,
//       // //       ...parseAssessmentData(res.assessment_type, parsedData), // Handle unique structures
//       // //     };
//       // //   });
//       // // },
//       // transformResponse: (response: any) => {
//       //   // Check if the response structure is as expected
//       //   console.log("Response from API:", response);
        
//       //   // const responses = response?.payload?.responses;
//       //   // if (!Array.isArray(responses)) {
//       //   //   console.error("Expected 'responses' to be an array, but got:", responses);
//       //   //   return [];  // Return an empty array if 'responses' is not available or not an array
//       //   // }

//       //   const responseData = response?.payload?.response;
        
//       //   if (!responseData) {
//       //     console.error("No response data found");
//       //     return [];  // Return an empty array if no valid 'response' is found
//       //   }

//       //   const parsedData = JSON.parse(responseData.response_data);

//       //   return [{
//       //     assessmentType: responseData.assessment_type,
//       //     testUUID: parsedData.test_uuid,
//       //     testName: parsedData.test_name,
//       //     createdAt: responseData.created_at,
//       //     learningStyle: parsedData.learning_style || 'Unknown',  // Default value if missing
//       //     chart: parsedData.chart || { labels: [], values: [] },  // Default empty chart
//       //     dimensions: parsedData.dimensions || [],  // Default empty array
//       //     recommendedTechniques: parsedData.recommended_techniques || [],  // Default empty array
//       //     relatedCareers: parsedData.related_careers || []  // Default empty array
//       //   }];
      
//       //   // // If responses exist and are an array, proceed with mapping
//       //   // return responses.map((res: any) => {
//       //   //   try {
//       //   //     const parsedData = JSON.parse(res.response_data);
//       //   //     console.log('response pared data: ', parsedData )
//       //   //     // return {
//       //   //     //   assessmentType: res.assessment_type,
//       //   //     //   testUUID: parsedData.test_uuid,
//       //   //     //   testName: parsedData.test_name,
//       //   //     //   createdAt: res.created_at,
//       //   //     //   ...parseAssessmentData(res.assessment_type, parsedData), // Handle unique structures
//       //   //     // };
//       //   //   } catch (e) {
//       //   //     console.error("Error parsing response data:", e);
//       //   //     return {};  // Return an empty object if parsing fails
//       //   //   }
//       //   // });
//       // }

//       transformResponse: (response: any) => {
//         const responseData = response?.payload?.response;

//         console.log("data from api api: ", responseData)
      
//         if (!responseData) {
//           console.error("No response data found");
//           return [];  // Return an empty array if no valid 'response' is found
//         }
      
//         const parsedData = JSON.parse(responseData.response_data);

//         console.log("data after pared: ", parsedData)
      
//         switch (responseData.test_name) {
//           case "LearningStyle":
//             return [{
//               assessmentType: responseData.test_name,
//               testUUID: parsedData.test_uuid,
//               testName: parsedData.test_name,
//               createdAt: responseData.created_at,
//               learningStyle: parsedData.learning_style || 'Unknown',
//               chart: parsedData.chart || { labels: [], values: [] },
//               dimensions: parsedData.dimensions || [],
//               recommendedTechniques: parsedData.recommended_techniques || [],
//               relatedCareers: parsedData.related_careers || []
//             }];
      
//           case "Values":
//             return [{
//               assessmentType: responseData.test_name,
//               testUUID: parsedData.test_uuid,
//               testName: parsedData.test_name,
//               createdAt: responseData.created_at,
//               chartData: parsedData.chart_data || [],
//               valueDetails: parsedData.value_details || [],
//               careerRecommendations: parsedData.career_recommendations || []
//             }];
      
//           case "Interests":
//             return [{
//               assessmentType: responseData.test_name,
//               testUUID: parsedData.test_uuid,
//               testName: parsedData.test_name,
//               createdAt: responseData.created_at,
//               hollandCode: parsedData.holland_code || '',
//               typeName: parsedData.type_name || '',
//               description: parsedData.description || '',
//               keyTraits: parsedData.key_traits || [],
//               careerPath: parsedData.career_path || [],
//               chartData: parsedData.chart_data || [],
//               dimensionDescriptions: parsedData.dimension_descriptions || []
//             }];
      
//           case "skill":
//             return [{
//               assessmentType: responseData.test_name,
//               testUUID: parsedData.test_uuid,
//               testName: parsedData.test_name,
//               createdAt: responseData.created_at,
//               categoryPercentages: parsedData.category_percentages || {},
//               skillsGrouped: parsedData.skills_grouped || {},
//               strongCareers: parsedData.strong_careers || []
//             }];
      
//           case "Personality":
//             return [{
//               assessmentType: responseData.test_name,
//               testUUID: parsedData.test_uuid,
//               testName: parsedData.test_name,
//               createdAt: responseData.created_at,
//               personalityType: parsedData.personality_type || {},
//               dimensions: parsedData.dimensions || [],
//               traits: parsedData.traits || {},
//               strengths: parsedData.strengths || [],
//               weaknesses: parsedData.weaknesses || [],
//               careerRecommendations: parsedData.career_recommendations || []
//             }];
      
//           default:
//             console.error("Unknown test type:", responseData.test_name);
//             return [];  // Return an empty array for unknown tests
//         }
//       }
      
      
//     }),
//   }),
// });

//export const { useFetchAssessmentDetailsQuery } = resultApi;

// Helper function to handle different assessment types
// const parseAssessmentData = (type: string, data: any) => {
//   switch (type) {
//     case 'Learning Style':
//       return {
//         learningStyle: data.learning_style || 'Unknown', // Default value if missing
//         chart: data.chart || { labels: [], values: [] }, // Default empty chart
//         dimensions: data.dimensions || [], // Default empty array
//         recommendedTechniques: data.recommended_techniques || [], // Default empty array
//         relatedCareers: data.related_careers || [] // Default empty array
//       };
//     case 'Values':
//       return {
//         chartData: data.chart_data,
//         valueDetails: data.value_details,
//         careerRecommendations: data.career_recommendations,
//       };
//     case 'Interests':
//       return {
//         hollandCode: data.holland_code,
//         typeName: data.type_name,
//         description: data.description,
//         keyTraits: data.key_traits,
//         careerPath: data.career_path,
//         chartData: data.chart_data,
//         dimensionDescriptions: data.dimension_descriptions,
//       };
//     case 'Skills':
//       return {
//         categoryPercentages: data.category_percentages,
//         skillsGrouped: data.skills_grouped,
//         strongCareers: data.strong_careers,
//       };
//     case 'Personality':
//       return {
//         personalityType: data.personality_type,
//         dimensions: data.dimensions,
//         traits: data.traits,
//         strengths: data.strengths,
//         weaknesses: data.weaknesses,
//         careerRecommendations: data.career_recommendations,
//       };
//     default:
//       return {};
//   }
// };

// Define the general structure of an assessment result.
interface AssessmentResult {
  assessmentType: string;
  testUUID: string;
  testName: string;
  createdAt: string;
}

// Define specific types for each result type.
interface LearningStyleResult extends AssessmentResult {
  learningStyle: string;
  chart: { labels: string[]; values: number[] };
  dimensions: { dimension_name: string; dimension_description: string; level: number }[];
  recommendedTechniques: { technique_name: string; description: string; image_url?: string }[];
  relatedCareers: { career_name: string; description: string; majors: string[] }[];
}

interface ValueResult extends AssessmentResult {
  chartData: { label: string; score: number }[];
  valueDetails: { name: string; definition: string; characteristics: string; percentage: string }[];
  careerRecommendations: { career_name: string; description: string; majors: string[] }[];
}

interface InterestResult extends AssessmentResult {
  hollandCode: string;
  typeName: string;
  description: string;
  keyTraits: string[];
  careerPath: string[];
  chartData: { label: string; score: number }[];
  dimensionDescriptions: { dimension_name: string; description: string }[];
}

interface SkillResult  {
  assessmentType: string;
  testUUID: string;
  testName: string;
  createdAt: string;
  categoryPercentages: { [key: string]: number };
  skillsGrouped: { [key: string]: { skill: string; description: string }[] };
  strongCareers: { career_name: string; description: string; majors: string[] }[];
}

interface PersonalityResult extends AssessmentResult {
  personalityType: { name: string; title: string; description: string };
  dimensions: { dimension_name: string; score: number }[];
  traits: { positive: string[]; negative: string[] };
  strengths: string[];
  weaknesses: string[];
  careerRecommendations: { career_name: string; description: string; majors: string[] }[];
}


export const resultApi = normPlovApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAssessmentDetails: builder.query({
      // Accept both uuid and resultType in the query
      query: ({ testUUID, resultType }: { testUUID: string; resultType: string }) => ({
        url: `test/${testUUID}`, // Dynamic query parameter
        method: 'GET',
      }),
      
      transformResponse: (response: any, meta, arg) => {
        const responseData = response?.payload?.response;
       
        const resultType = arg.resultType
        console.log("data from api: ", responseData);

        if (!responseData) {
          console.error("No response data found");
          return [];  
        }

        console.log("result typee: ", arg.resultType)

        const parsedData = JSON.parse(responseData.response_data);

        console.log("parsed json: ", parsedData)
       
        // Process data based on the provided resultType
        switch (resultType) {
          case "learningStyle":
            return [{
              assessmentType: resultType,
              testUUID: parsedData.test_uuid,
              testName: resultType,
              createdAt: responseData.created_at,
              learningStyle: parsedData.learning_style || 'Unknown',
              chart: parsedData.chart || { labels: [], values: [] },
              dimensions: parsedData.dimensions || [],
              recommendedTechniques: parsedData.recommended_techniques || [],
              relatedCareers: parsedData.related_careers || []
            }] as any; 
        
          case "value":
            return [{
              assessmentType: resultType,
              testUUID: parsedData.test_uuid,
              testName: resultType,
              createdAt: responseData.created_at,
              chartData: parsedData.chart_data || [],
              valueDetails: parsedData.value_details || [],
              careerRecommendations: parsedData.career_recommendations || []
            }];
        
          case "interest":
            return [{
              assessmentType: resultType,
              testUUID: parsedData.test_uuid,
              testName: resultType,
              createdAt: responseData.created_at,
              hollandCode: parsedData.holland_code || '',
              typeName: parsedData.type_name || '',
              description: parsedData.description || '',
              keyTraits: parsedData.key_traits || [],
              careerPath: parsedData.career_path || [],
              chartData: parsedData.chart_data || [],
              dimensionDescriptions: parsedData.dimension_descriptions || []
            }];
        
          case "skill":
            return [{
              assessmentType: resultType,
              testUUID: parsedData.test_uuid,
              testName: resultType,
              createdAt: responseData.created_at,
              categoryPercentages: parsedData.category_percentages || {},
              skillsGrouped: parsedData.skills_grouped || {},
              strongCareers: parsedData.strong_careers || []
            }] as any;
        
          case "personality":
            return [{
              assessmentType: resultType,
              testUUID: parsedData.test_uuid,
              testName: resultType,
              createdAt: responseData.created_at,
              personalityType: parsedData.personality_type || {},
              dimensions: parsedData.dimensions || [],
              traits: parsedData.traits || {},
              strengths: parsedData.strengths || [],
              weaknesses: parsedData.weaknesses || [],
              careerRecommendations: parsedData.career_recommendations || []
            }];
        
          default:
            console.error("Unknown result type:", resultType);
            return [];  // Return an empty array for unknown tests
        }
      }
    }),
  }),
});

export const { useFetchAssessmentDetailsQuery } = resultApi;



