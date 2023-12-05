import type { Meta, StoryObj } from '@storybook/react'

import Label from '@/components/ui/Label'

const meta = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  render: (args) => <Label {...args}>Label</Label>,
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
}
