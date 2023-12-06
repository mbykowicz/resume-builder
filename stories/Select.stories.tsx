import type { Meta, StoryObj } from '@storybook/react'

import {
  Select,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/Select'

const meta = {
  title: 'UI/Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder='Select something...' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Group</SelectLabel>
          <SelectItem value='item#1'>Item #1</SelectItem>
          <SelectItem value='item#2'>Item #2</SelectItem>
          <SelectItem value='item#3'>Item #3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
