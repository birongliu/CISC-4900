
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { OnboardingResultOptions } from './interface'

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs))
}


export function getDataFromFormData(formData: FormData): OnboardingResultOptions[] {
  const data: OnboardingResultOptions[] = []
  formData.forEach((value, key) => {
    data.push({ key, value: value.toString() })
  })
  return data
}