import type { Meta, StoryObj } from '@storybook/react'

import Switch from '@/components/ui/Switch'

const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  render: (args) => <Switch {...args} />,
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    small: false,
  },
}
