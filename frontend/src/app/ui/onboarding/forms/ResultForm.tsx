import { getDataFromFormData } from "@/app/utils/functions";
import { OnboardingComponentProps } from "@/app/utils/interface";
import React from "react";

export default function ResultForm({
  formData,
  progressItem,
}: OnboardingComponentProps) {
  const data = getDataFromFormData(formData);
  return (
    <div className="w-full py-5">
      <div className="py-2">
        <h1 className="text-2xl font-bold font-poppins text-center py-2">
          {progressItem.question}
        </h1>
      </div>
      <div className="grid grid-cols-2  gap-3 py-5">
        {data.map((item, index) => (
          <div
            className={`border p-2 last:grid-rows-1 cursor-pointer ${
              index === data.length - 1 ? "col-span-2" : ""
            }`}
            key={item.key}
          >
            {item.key}: {item.value}
          </div>
        ))}
      </div>
    </div>
  );
}
