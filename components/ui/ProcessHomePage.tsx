import React from "react";

// Timeline item type
type TimelineItem = {
  number: string;
  description: string;
};

export default function ProcessHomePage() {
  const items: TimelineItem[] = [
    {
      number: "០១",
      description:
        "អ្នកអាចធ្វើការចុះឈ្មោះដើម្បីចូលទៅប្រើប្រាស់ website របស់យើង",
    },
    {
      number: "០២",
      description: "អ្នកអាចធ្វើការតេស្ត​សំណួរទាំងអស់របស់យើង",
    },
    {
      number: "០៣",
      description:
        "អ្នកនឹងទទួលបានលទ្ធផលដែលបង្ហាញពីបុគ្គលិកលក្ខណៈ ប្រភេទការងារ​ដែលសាកសមនឹងអ្នក",
    },
    {
      number: "០៤",
      description:
        "អ្នកអាចសន្ទនាជាមួយ AI​ ដើម្បីស្វែងយល់បន្ថែមទៅលើលទ្ធផលដែលទទួលបាន",
    },
  ];

  return (
    <div className="bg-primary p-8 md:p-10 lg:p-24">
      <h2 className="text-center text-white text-2xl md:text-4xl lg:text-4xl font-bold lg:mb-16 md:mb-16 mb-8">
        ដំណើរការរបស់<span className="text-orange-400">នាំផ្លូវ</span>?
      </h2>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row lg:flex-row lg:justify-between md:justify-between justify-center items-start gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex  flex-col justify-center items-center text-center relative flex-1"
            >
              {/* Number Circle */}
              <div className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-14 h-14  rounded-full bg-white flex items-center justify-center lg:mb-6 md:mb-6 m-2 relative z-10">
                <span className="lg:text-3xl md:text-3xl text-xl text-textprimary font-bold">
                  {item.number}
                </span>
              </div>

              {/* Dotted Line */}
              {index < items.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+2rem)] right-0 h-px lg:w-60 md:w-50 w-40 border-t-2 border-dashed border-white/60 -translate-y-1/2 z-0" />
              )}

              {/* Description */}
              <p className="text-white text-lg md:text-xl lg:text-xl leading-relaxed max-w-[250px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
