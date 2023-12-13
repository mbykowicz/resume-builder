'use client'

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

const variants = cva(
  'inline-flex justify-center items-center font-medium rounded-full border transition disabled:text-disabled-foreground focus-visible:outline-none focus-visible:ring focus-visible:ring-ring/25',
  {
    variants: {
      variant: {
        default:
          'bg-zinc-900 text-white border-transparent hover:bg-zinc-800 disabled:bg-disabled-background',
        secondary:
          'bg-white text-zinc-900 border-border hover:bg-zinc-100 disabled:bg-disabled-background disabled:bored-disabled-border',
        ghost:
          'bg-transparent text-zinc-900 border-transparent hover:border-border',
        link: 'bg-transparent text-zinc-900 hover:text-zinc-800',
        destructive:
          'bg-destructive text-destructive-foreground border-transparent hover:bg-destructive/90 focus-visible:ring-destructive/30',
      },
      size: {
        default: 'h-10 px-6',
        small: 'h-8 px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ asChild = false, className, variant, size, ...props }, ref) => {
    const Component = asChild ? Slot : 'button'
    return (
      <Component
        className={cn(variants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'
export default Button
