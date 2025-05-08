
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to format fee with K notation
export const formatFee = (fee: string): string => {
  const numericFee = parseFloat(fee.replace(/[^0-9.]/g, ''))
  if (isNaN(numericFee)) return fee // Return original if not a valid number
  
  if (numericFee >= 1000) {
    return `₵${(numericFee / 1000).toFixed(1)}K`
  }
  return `₵${numericFee}`
}

// Function to extract year from date string
export const extractYear = (dateString: string): string => {
  try {
    const date = new Date(dateString)
    return isNaN(date.getTime()) ? dateString : date.getFullYear().toString()
  } catch {
    return dateString
  }
}