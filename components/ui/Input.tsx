'use client'

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const variants = cva(
  'inline-flex justify-center items-center gap-2 h-10 px-4 rounded-full bg-white border transition [&:has(input:disabled)]:bg-disabled-background [&:has(input:disabled)]:text-disabled-foreground [&:has(input:disabled)]:select-none focus-within:outline-none focus-within:ring',
  {
    variants: {
      variant: {
        default:
          'border-input focus-within:border-input-active focus-within:ring-ring/20 [&:has(input:invalid)]:border-destructive [&:has(input:invalid)]:focus-within:ring-destructive/30',
        destructive: 'border-destructive focus-within:ring-destructive/30',
      },
      reverse: {
        true: 'flex-row-reverse',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof variants> {}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ children, className, variant, reverse = false, ...props }, ref) => {
    return (
      <div className={cn(variants({ variant, reverse, className }))}>
        <span className='text-muted-foreground'>{children}</span>
        <input
          className='bg-transparent text-foreground placeholder:text-placeholder focus-visible:outline-none flex-1'
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)
Input.displayName = 'Input'
export default Input
