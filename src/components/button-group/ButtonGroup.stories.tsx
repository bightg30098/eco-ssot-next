import ButtonGroup from './ButtonGroup'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ButtonGroup> = {
  title: 'ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

const books = [
  { key: 'Harper Lee', value: 'To Kill a Mockingbird' },
  { key: 'Lev Tolstoy', value: 'War and Peace' },
]

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  render: () => <ButtonGroup options={books} />,
}
