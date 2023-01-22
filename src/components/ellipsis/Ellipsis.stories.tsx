import Ellipsis from './Ellipsis'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Ellipsis> = {
  title: 'Ellipsis',
  component: Ellipsis,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Ellipsis>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const VeryLongText: Story = {
  render: () => (
    <div className="max-w-32">
      <Ellipsis label="veryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyylongtext" />
    </div>
  ),
}

export const NormalText: Story = {
  render: () => (
    <div className="max-w-32">
      <Ellipsis label="text" />
    </div>
  ),
}
