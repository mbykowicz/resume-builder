import type { Meta, StoryObj } from '@storybook/react'

import FormMessage from '@/components/ui/FormMessage'

const meta = {
  title: 'UI/Form/FormMessage',
  component: FormMessage,
  parameters: {
    layout: 'centered',
  },
  args: {
    message: 'Help message',
  },
  render: (args) => <FormMessage {...args} />,
} satisfies Meta<typeof FormMessage>

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
