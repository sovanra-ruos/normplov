import React from "react";
import { Brain, Lightbulb, Zap, Bot, LineChart } from "lucide-react";

// Utility function for class names
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// Card component
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      " border border-zinc-100 w-full h-[370px] rounded-xl bg-white text-gray-900 shadow-sm",
      className ?? ""
    )}
    {...props}
  />
));
Card.displayName = "Card";

// CardContent component
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-8 mt-6", className ?? "")} {...props} />
));
CardContent.displayName = "CardContent";

// Feature type
type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

// FeatureGrid component
export default function FeatureGrid() {
  const features: Feature[] = [
    {
      icon: <Brain className="w-8 h-8 text-orange-400" />,
      title: "ប្រឹក្សាពីអាជីពការងារ​ និងមុខជំនាញ នៅសកលវិទ្យាល័យ",
      description:
        "អ្នកនឹងទួលបានការណែនាំអំពីការងារ និងសកលដែលសាកសមនឹងបុគ្គលិកលក្ខណៈរបស់អ្នក",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-400" />,
      title: "ស្វែងរកទេពកោសល្យ",
      description:
        "ស្វែងយល់ពីចំណុចខ្លាំង និងសមត្ថភាពពិសេសរបស់អ្នកតាមរយៈការធ្វើតេស្តដ៏ទូលំទូលាយ។",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "ការស្វែងយល់ពីអាជីព",
      description: "ស្វែងយល់ពីរបៀបដែលជំនាញឯកទេសផ្សេងៗអាចបម្លែងទៅជាឱកាសការងារក្នុងពិភពជាក់ស្តែង។",
    },
    {
      icon: <Bot className="w-8 h-8 text-green-400" />,
      title: "សន្ទនាជាមួយ AI",
      description: "ស្វែងយល់ពីចំណុចខ្លាំង និងសមត្ថភាពពិសេសរបស់អ្នកតាមរយៈការធ្វើតេស្តដ៏ទូលំទូលាយ។",
    },
    {
      icon: <LineChart className="w-8 h-8 text-purple-400" />,
      title: "ការធ្វើតេស្តសមត្ថភាព",
      description: "ស្វែងយល់ពីចំណុចខ្លាំង និងសមត្ថភាពពិសេសរបស់អ្នកតាមរយៈការធ្វើតេស្តដ៏ទូលំទូលាយ។",
    },
  ];

  return (
    <div className="container  p-8 max-w-7xl mx-auto my-4 md:my-6 ">
      <div>
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold text-center mb-12 text-textprimary">
          មុខងារសំខាន់ៗ
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {features.map((feature, index) => (
          <Card key={index} className={index > 2 ? "md:col-span-1.5  " : ""}>
            <CardContent className="flex flex-col justify-center items-center text-center space-y-4">
              <div className="p-6 rounded-full bg-bglight">{feature.icon}</div>
              <h3 className="font-semibold lg:text-2xl md:text-2xl text-xl text-textprimary">{feature.title}</h3>
              <p className="lg:text-xl md:text-xl text-lg text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
