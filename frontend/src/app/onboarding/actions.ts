"use server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { getDataFromFormData } from "../utils/functions";
import { OnboardingResultOptions, ProgressItemProps } from "../utils/interface";

export const completeOnboarding = async (formData: FormData) => {
  const { userId } = auth();

  if (!userId) {
    return { message: "No Logged In User" };
  }
  const data = getDataFromFormData(formData);
  const dataFromAI = await fetchAIOnboardingResult(data);
  if(!dataFromAI) return { message: "Error Fetching AI Data" };
  try {
    const clerk = clerkClient();
    await clerk.users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
        onboardingAIOutput: dataFromAI,
      },
    });

    return { message: "User metadata Updated" };
  } catch (e) {
    console.log("error", e);
    return { message: "Error Updating User Metadata" };
  }
};

async function fetchAIOnboardingResult(
  formData: OnboardingResultOptions[]
) {
  console.log("here request", process.env.NEXT_PUBLIC_CLIENT_URL);
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/onboarding`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );
  if(data.status !== 200) return null;
  const response = await data.json();
  return response.data;
}