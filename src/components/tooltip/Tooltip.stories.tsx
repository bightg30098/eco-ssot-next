import Tooltip from './Tooltip'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Tooltip>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Basic: Story = {
  render: () => <Tooltip render="Tooltip works">Tooltip trigger</Tooltip>,
}
