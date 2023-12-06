'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'

import { cn } from '@/lib/utils'

interface Props
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  small: boolean
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  Props
>(({ small = false, className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed data-[disabled]:bg-zinc-100 data-[disabled]:border-zinc-200 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      small && 'h-4 w-8',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block mx-px h-5 w-5 rounded-full bg-background ring-0 transition-transform data-[disabled]:bg-input data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
        small && 'h-3 w-3 data-[state=checked]:translate-x-4',
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export default Switch
