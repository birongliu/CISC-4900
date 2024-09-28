"use client";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import PanelProgressBar from "@/app/ui/onboarding/PanelProgressBar";
import Shape from "@/app/ui/shared/Shape";
import { ExperienceForm, PetSizeForm } from "@/app/ui/onboarding/forms";
import { ActionType, ProgressItemProps } from "@/app/utils/interface";
import { completeOnboarding } from "./actions";
import IntroductionForm from "@/app/ui/onboarding/forms/IntroductionForm";
import QualitiesForm from "../ui/onboarding/forms/QualitiesForm";
import PetTypeForm from "../ui/onboarding/forms/PetTypeForm";
import BreedTypeForm from "../ui/onboarding/forms/BreedTypeForm";
import ResultForm from "../ui/onboarding/forms/ResultForm";

const progressItems: ProgressItemProps[] = [
  {
    id: "onboarding - Instruction",
    question: "Application Name",
    status: "incomplete",
    actions: [ActionType.START],
    completedColor: {
      from: "from-[rgb(227,205,10)]",
      to: "to-[rgb(227,205,160)]",
    },
  
    component: (options) => <IntroductionForm {...options} />,
  },
  {
    id: "Experience",
    question: "What is your experience level with pets?",
    status: "incomplete",
    actions: [ActionType.PREVIOUS, ActionType.NEXT],
    completedColor: {
      from: "from-[rgb(227,205,173)]",
      to: "to-[rgb(227,205,173)]",
    },
    component: (options) => <ExperienceForm {...options} />,
  },
  {
    id: "PetSize",
    actions: [ActionType.PREVIOUS, ActionType.NEXT],
    question: "What size pet are you considering?",
    status: "incomplete",
    completedColor: {
      from: "from-[rgb(227,205,173)]",
      to: "to-[rgb(167,137,123)]",
    },
    component: (options) => <PetSizeForm {...options} />,
  },
  {
    id: "AnimalType",
    question: "What type of pet are you interested in adopting?",
    status: "incomplete",
    actions: [ActionType.PREVIOUS, ActionType.NEXT],
    completedColor: {
      from: "from-[rgb(167,137,123)]",
      to: "to-[rgb(167,137,123)]",
    },
    component: (options) => <PetTypeForm {...options} />,
  },
  {
    id: "BreedType",
    question: "What breed(s) do you prefer?",
    status: "incomplete",
    actions: [ActionType.PREVIOUS, ActionType.NEXT],
    completedColor: {
      from: "from-[rgb(167,137,123)]",
      to: "to-[rgb(96,56,64)]",
    },
    component: (options) => <BreedTypeForm {...options} />,
  },
  {
    id: "Qualities",
    actions: [ActionType.PREVIOUS, ActionType.NEXT],
    question: "What qualities are you looking for in a pet?",
    completedColor: {
      from: "from-[rgb(96,56,64)]",
      to: "to-[rgb(47,0,22)]",
    },
    status: "incomplete",
    component: (options) => <QualitiesForm {...options} />,
  },
  {
    id: "review",
    actions: [ActionType.PREVIOUS, ActionType.SUBMIT],
    question: "Review",
    completedColor: {
      from: "from-[rgb(227,205,173)]",
      to: "to-[rgb(227,205,173)]",
    },
    status: "incomplete",
    component: (options) => <ResultForm {...options} />,
  },
];

export default function OnboardingComponent() {
  const { user } = useUser();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progressItem, setProgressItem] =
    useState<ProgressItemProps[]>(progressItems);
  const [formData, setFormData] = useState(new FormData());

  const handleFormSubmit = async (formData: FormData) => {
    await completeOnboarding(formData);
    if (user) await user.reload();
    setIsSubmitting(true);
    //router.push("/dashboard");
  };

  const handleSubmit = () => {
    handleFormSubmit(formData);
  };

  function handleNext(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setCurrentStep((prev) => prev + 1);
    const current = getProgressItem(progressItem, currentStep);
    const next = getProgressItem(progressItem, currentStep + 1);
    current.status = "completed";
    next.status = "current";
    setProgressItem(progressItem);
  }

  function handleBack(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (currentStep - 1 < 0) return;
    const current = getProgressItem(progressItem, currentStep);
    const prev = getProgressItem(progressItem, currentStep - 1);
    setCurrentStep((prev) => prev - 1);
    current.status = "incomplete";
    prev.status = "current";
    setProgressItem(progressItem);
  }

  function handleFormData(key: string, value: string) {
    setFormData((prev) => {
      prev.set(key, value);
      return prev;
    });
  }

  const actions: Record<
    ActionType,
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  > = {
    next: handleNext,
    previous: handleBack,
    start: handleNext,
    submit: handleSubmit,
  };

  function getProgressItem<T>(items: T[], currentPosition: number) {
    const position = getPosition(currentPosition);
    if (position < 0) {
      return items[0];
    }

    if (position > items.length) {
      return items[items.length - 1];
    }

    return items[position];
  }

  const getPosition = (currentStep: number) => {
    return Math.min(progressItem.length - 1, currentStep);
  }

  const prev = getProgressItem(progressItem, currentStep - 1);
  const current = getProgressItem(progressItem, currentStep);
  const next = getProgressItem(progressItem, currentStep + 1);


  return (
    <div className=" px-10 py-5 mt-5">
      <Shape className="-top-24 -left-12" />
      <div className="relative bg-pureWhite rounded-xl py-10 px-10 ">
        <PanelProgressBar progressItems={progressItem} />
        <div className="text-darkMaroon w-full">
          {current.component({
            progressItem: current,
            formData,
            handleFormData: (data) => {
              handleFormData(current.id, data);
              return data;
            },
            nextData: { id: "next", data: formData.get(next.id) as string },
            previousData: { id: "previous", data: formData.get(prev.id) as string },
            data: formData.get(current.id) as string,
          })}
          <div className="w-full flex justify-center items-center gap-2">
            {current.actions.map((action) => (
              <button
                disabled={ActionType.SUBMIT === action && isSubmitting}
                onClick={(e) => actions[action](e)}
                className={`w-full uppercase bg-darkMaroon rounded-xl text-white p-2`}
                key={action}
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
