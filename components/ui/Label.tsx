'use client'

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const variants = cva('font-medium text-[12px]', {
  variants: {
    variant: {
      default: 'text-foreground',
      destructive: 'text-destructive',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface Props
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof variants> {}

const Label = React.forwardRef<HTMLLabelElement, Props>(
  ({ children, className, variant, ...props }, ref) => {
    return (
      <label
        className={cn(variants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </label>
    )
  },
)
Label.displayName = 'Label'
export default Label
