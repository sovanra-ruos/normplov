import { normPlovApi } from '@/redux/api'; // Import the main API instance

const assessmentApiMap: Record<string, string> = {
    skill: 'assessment/predict-skills',
    personality: 'assessment/personality-assessment',
    interest: 'assessment/process-interest-assessment',
    value: 'assessment/value-assessment',
    learningStyle: 'assessment/predict-learning-style',
  };
  

export const quizApi = normPlovApi.injectEndpoints({
  endpoints: (builder) => ({
    predictAssessment: builder.mutation({
      query: ({ assessmentType, body }: { assessmentType: string ; body: object }) => {
        const endpoint = assessmentApiMap[assessmentType];
        if (!endpoint) throw new Error(`Invalid assessment type: ${assessmentType}`);
        return {
          url: endpoint,
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { usePredictAssessmentMutation } = quizApi;
