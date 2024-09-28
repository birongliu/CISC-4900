"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation';
import { Pet } from '@/app/utils/interface';
export default function Dashboard() {
  const { user, isSignedIn } = useUser();
  const ctx: Pet[] = isSignedIn ? user.publicMetadata.onboardingAIOutput as Pet[] : [];
  return (
    <div>{ctx.map(k => (
      <div key={k.id}>{k.name}</div>
    ))}</div>
  )
}
