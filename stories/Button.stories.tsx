import type { Meta, StoryObj } from '@storybook/react'

import Button from '@/components/ui/Button'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  render: (args) => <Button {...args}>Button</Button>,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
  },
}
