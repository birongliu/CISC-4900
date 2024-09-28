import Header from "@/app/ui/navigation/Header";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default function onBoardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check if a user has completed onboarding
  // If yes, redirect them to /dashboard
  if (auth().sessionClaims?.metadata.onboardingComplete) {
    redirect("/dashboard");
  }

  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
