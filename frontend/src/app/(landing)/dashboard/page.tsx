"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { Pet } from "@/app/utils/interface";
export default function Dashboard() {
  const { user, isSignedIn } = useUser();
  const pets =
    isSignedIn && user.publicMetadata.onboardingAIOutput
      ? (user.publicMetadata.onboardingAIOutput as Pet[])
      : null;
  return (
    <div>
      <div>
        {pets !== null ? (
          pets.map((pet) => (
            <div key={pet.id}>
              {pet.name} - {pet.type}
            </div>
          ))
        ) : (
          <div>You dont have recommanded pets</div>
        )}
      </div>
    </div>
  );
}
