import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { CrossCircledIcon } from '@radix-ui/react-icons'

const variants = cva('text-[11px] flex items-center gap-1 py-1', {
  variants: {
    variant: {
      default: 'text-muted-foreground',
      destructive: 'text-destructive',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface Props
  extends React.AllHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof variants> {
  message?: string
}

function FormMessage({ message, variant, className }: Props) {
  return (
    <p className={cn(variants({ variant, className }))}>
      {variant === 'destructive' && <CrossCircledIcon className='w-3 h-3' />}
      {message}
    </p>
  )
}

export default FormMessage
