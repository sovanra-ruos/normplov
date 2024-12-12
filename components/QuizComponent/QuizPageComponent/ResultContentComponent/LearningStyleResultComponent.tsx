import React from 'react'
import { QuizLearningStyleResultCard } from '../../QuizLearningStyleResultCard'
import QuizHeader from '../../QuizHeader'
import { QuizOptHorizontalContainer } from '../../QuizOptHorizontalContainer'
import learningStyleJson from '@/app/(user)/json/learningStyleKh.json'


import {
    BarChart,
    Bar,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Rectangle,
} from "recharts";
import { useFetchAssessmentDetailsQuery } from '@/redux/feature/assessment/result'
import { RecommendationCard } from '../../RecommendationCard'

type props = {
    uuid: string
}

type ChartData = {
    name: string;
    value: number;
    color: string; // Add color field
};


type RecommendedTechnique = {
    technique_name: string;
    category: string;
    description: string;
};

type learningStyle = {
    dimension_name: string;
    dimension_description: string;
    level: number;
}

type BarProps = {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    payload?: {
      color?: string;
    };
  }

export const LearningStyleResultComponent = ({ uuid }: props) => {
    

    const { data: response } = useFetchAssessmentDetailsQuery(uuid);
    console.log("data from learning:", response?.[0])

    const recommendedTechniques = response?.[0].recommendedTechniques
    const learningStyles = response?.[0].dimensions



    const { Recommendation } = learningStyleJson;

 
    // Chart
    const colors = ["#82ca9d", "#ffc658", "#d84d8b", "#8884d8"];

    const chartData: ChartData[] = response?.[0]?.chart?.labels.map(
        (label: string, index: number) => ({
            name: label,
            value: response[0].chart.values[index],
            color: colors[index % colors.length],
        })
    ) || [];

    // Custom renderer for each bar
    const CustomBar = (props: BarProps) => {
        const { x, y, width, height } = props;
        return <Rectangle fill={props?.payload?.color} x={x} y={y} width={width} height={height} />;
    };


    return (
        <div>
            <div className=' max-w-7xl mx-auto '>

                <div className='max-w-4xl'>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart
                            width={200}
                            height={300}
                            data={chartData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <Tooltip />
                            <Bar dataKey="value" shape={<CustomBar />} name="Percentage" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>



                <div className='p-4 md:p-10 lg:p-12 space-y-4 lg:space-y-8'>
                    <QuizHeader title="របៀបនៃការរៀនដែលអ្នកគួរជ្រើសរើសនិងមិនគួរ" description="Learning Style you should choose or avoid" size='sm' type='result' />

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        {learningStyles?.map((style: learningStyle, index: number) => (
                            <QuizLearningStyleResultCard
                                key={index}
                                title={style.dimension_name}
                                desc={style.dimension_description}
                                label={style.level}
                            />
                        ))}

                    </div>
                </div>




                <div className='p-4 md:p-10 lg:p-12 space-y-4 lg:space-y-8'>
                    <QuizHeader title="ពួកយើងណែនាំវិធីសាស្រ្តខាងក្រោមដើម្បីជាជំនួយដល់ការសិក្សារបស់អ្នក" description="We recommend you to use these techniques for your studies" size='sm' type='result' />

                    <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {recommendedTechniques?.map((item: RecommendedTechnique, index: number) => (
                            <QuizOptHorizontalContainer
                                key={index}
                                title={item?.technique_name}
                                desc={item?.description}
                                type='learninigStyle'

                            />

                        ))}

                    </div>
                </div>

                <div className='space-y-4 lg:space-y-8 max-w-7xl mx-auto p-4 md:p-10 lg:p-12 '>

                    <QuizHeader title="ការងារទាំងនេះអាចនឹងសាកសមជាមួយអ្នក" description="These career may suitable for you" size='sm' type='result' />

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <RecommendationCard jobTitle={Recommendation.jobTitle} jobDesc={Recommendation.jobdesc} majors={Recommendation.majors} unis={Recommendation.unis} />
                        <RecommendationCard jobTitle={Recommendation.jobTitle} jobDesc={Recommendation.jobdesc} majors={Recommendation.majors} unis={Recommendation.unis} />
                    </div>

                </div>




            </div>
        </div>
    )
}
