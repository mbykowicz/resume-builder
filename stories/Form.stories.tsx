import type { Meta, StoryObj } from '@storybook/react'

import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import FormMessage from '@/components/ui/FormMessage'
import Switch from '@/components/ui/Switch'

const meta = {
  title: 'UI/Form/FormField',
  component: Input,
  args: {
    placeholder: 'Your name',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <>
      <Label htmlFor='name' className='block'>
        Name
      </Label>
      <Input name='name' id='name' {...args} />
      <FormMessage message='Help message' />
    </>
  ),
}

export const Destructive: Story = {
  render: (args) => (
    <>
      <Label htmlFor='name' className='block' variant='destructive'>
        Name
      </Label>
      <Input name='name' id='name' {...args} variant='destructive' />
      <FormMessage message='Help message' variant='destructive' />
    </>
  ),
}
