
'use client'
import React from "react";
import DynamicDraftCard from "./TestCard";
import { Eye, Copy, Trash } from "lucide-react";

const DraftList = () => {
  const handleAction = (actionKey: string, title: string) => {
    alert(`${actionKey} clicked for ${title}`);
  };

  const actions = [
    {
      label: "View",
      icon: <Eye className="w-4 h-4 text-green-600" />,
      actionKey: "view",
      onClick: handleAction,
    },
    {
      label: "Copy",
      icon: <Copy className="w-4 h-4 text-blue-600" />,
      actionKey: "copy",
      onClick: handleAction,
    },
    {
      label: "Delete",
      icon: <Trash className="w-4 h-4 text-red-600" />,
      actionKey: "delete",
      onClick: handleAction,
    },
  ];

  return (
    <div className="w-full bg-[#F3FBF9]">
      
      <div className="grid gap-4 grid-cols-1 w-full">
        <DynamicDraftCard
          title="Draft 5"
          description="Personality Assessment"
          date="12-April-2024"
          actions={actions}
          backgroundColor="bg-green-500"
        />
        <DynamicDraftCard
          title="Draft 4"
          description="Value Assessment"
          date="12-April-2024"
          actions={actions}
          backgroundColor="bg-blue-500"
        />
        <DynamicDraftCard
          title="Draft 3"
          description="Strength and Weakness Assessment"
          date="12-April-2024"
          actions={actions}
          backgroundColor="bg-yellow-500"
        />
        <DynamicDraftCard
          title="Draft 2"
          description="Learning Style Assessment"
          date="12-April-2024"
          actions={actions}
          backgroundColor="bg-red-500"
        />
        <DynamicDraftCard
          title="Draft 2"
          description="Learning Style Assessment"
          date="12-April-2024"
          actions={actions}
          backgroundColor="bg-red-500"
        />
        <DynamicDraftCard
          title="Draft 2"
          description="Learning Style Assessment"
          date="12-April-2024"
          actions={actions}
          backgroundColor="bg-red-500"
        />
        <DynamicDraftCard
          title="Draft 2"
          description="Learning Style Assessment"
          date="12-April-2024"
          actions={actions}
          backgroundColor="bg-red-500"
        />
        <DynamicDraftCard
          title="Draft 2"
          description="Learning Style Assessment"
          date="12-April-2024"
          actions={actions}
          backgroundColor="bg-red-500"
        />
      </div>
    </div>
  );
};

export default DraftList;
