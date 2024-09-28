import { OnboardingComponentProps } from "@/app/utils/interface";
import React from "react";

const level = ["Beginner", "Intermediate", "Experienced"];

export default function QualitiesForm({
  progressItem,
  handleFormData,
  data,
}: OnboardingComponentProps) {
  const [qualities, setQaulities] = React.useState<string>(data ?? '');

  function handleButton(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    handleFormData(qualities);
    
  }

  return (
    <div className="w-full py-5">
    <div className="py-2">
      <h1 className="text-2xl font-bold font-poppins text-center py-2">
        {progressItem.question}
      </h1>
      <p className="font-semibold text-center">
        We&apos;d love to know what qualities you&apos;re looking for in a pet.
        Please share your preferences below.
      </p>
      </div>
      <form id="qualities">
      <textarea
        form="qualities"
        value={qualities}
        onChange={(e) => setQaulities(e.target.value)}
        className="w-full px-2 py-2 bg-white resize-none h-40 rounded-lg border border-gray-300"
        name="quality"
        id="qaulity"
        placeholder="I'm looking for a pet that is..."
      ></textarea>
      <button onClick={handleButton} form="qualities" type="submit" className="w-full border rounded py-2">Submit</button>
      </form>
    </div>
  );
}
