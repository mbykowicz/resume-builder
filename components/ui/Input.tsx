import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const variants = cva(
  'inline-flex justify-center items-center h-10 px-4 rounded-full bg-white border transition [&:has(input:disabled)]:bg-disabled-background [&:has(input:disabled)]:text-disabled-foreground [&:has(input:disabled)]:select-none focus-within:outline-none focus-within:ring',
  {
    variants: {
      variant: {
        default:
          'border-input focus-within:border-input-active focus-within:ring-ring/20 [&:has(input:invalid)]:border-destructive [&:has(input:invalid)]:focus-within:ring-destructive/30',
        destructive: 'border-destructive focus-within:ring-destructive/30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof variants> {
  asChild?: boolean
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div className={cn(variants({ variant, className }))}>
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
