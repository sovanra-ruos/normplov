import { normPlovApi } from '@/redux/api'; // Import the main API instance

export const resultApi = normPlovApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAssessmentDetails: builder.query({
      query: (testUUID: string) => ({
        url: `test/details?test_uuid=${testUUID}`, // Dynamic query parameter
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        const { responses } = response.payload;

        return responses.map((res: any) => {
          const parsedData = JSON.parse(res.response_data);
          return {
            assessmentType: res.assessment_type,
            testUUID: parsedData.test_uuid,
            testName: parsedData.test_name,
            createdAt: res.created_at,
            ...parseAssessmentData(res.assessment_type, parsedData), // Handle unique structures
          };
        });
      },
    }),
  }),
});

export const { useFetchAssessmentDetailsQuery } = resultApi;

// Helper function to handle different assessment types
const parseAssessmentData = (type: string, data: any) => {
  switch (type) {
    case 'Learning Style':
      return {
        learningStyle: data.learning_style,
        chart: data.chart,
        dimensions: data.dimensions,
        recommendedTechniques: data.recommended_techniques,
        relatedCareers: data.related_careers,
      };
    case 'Values':
      return {
        chartData: data.chart_data,
        valueDetails: data.value_details,
        careerRecommendations: data.career_recommendations,
      };
    case 'Interests':
      return {
        hollandCode: data.holland_code,
        typeName: data.type_name,
        description: data.description,
        keyTraits: data.key_traits,
        careerPath: data.career_path,
        chartData: data.chart_data,
        dimensionDescriptions: data.dimension_descriptions,
      };
    case 'Skills':
      return {
        categoryPercentages: data.category_percentages,
        skillsGrouped: data.skills_grouped,
        strongCareers: data.strong_careers,
      };
    case 'Personality':
      return {
        personalityType: data.personality_type,
        dimensions: data.dimensions,
        traits: data.traits,
        strengths: data.strengths,
        weaknesses: data.weaknesses,
        careerRecommendations: data.career_recommendations,
      };
    default:
      return {};
  }
};
