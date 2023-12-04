import type { Meta, StoryObj } from '@storybook/react'

import Input from '@/components/ui/Input'

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    placeholder: 'Input field',
  },
  render: (args) => <Input {...args} />,
} satisfies Meta<typeof Input>

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
