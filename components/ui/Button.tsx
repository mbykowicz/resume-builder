import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

type Props = {
  children?: React.ReactNode
}
export type Ref = HTMLButtonElement

const Button = React.forwardRef<Ref, Props>(({ children }, ref) => {
  return <button ref={ref}>{children}</button>
})
Button.displayName = 'Button'
export default Button
