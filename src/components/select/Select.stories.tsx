import Select from './Select'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Select>

const books = [
  { key: 'Harper Lee', value: 'To Kill a Mockingbird' },
  { key: 'Lev Tolstoy', value: 'War and Peace' },
  { key: 'Fyodor Dostoyevsy', value: 'The Idiot' },
  { key: 'Oscar Wilde', value: 'A Picture of Dorian Gray' },
  { key: 'George Orwell', value: '1984' },
  { key: 'Jane Austen', value: 'Pride and Prejudice' },
  { key: 'Marcus Aurelius', value: 'Meditations' },
  { key: 'Fyodor Dostoevsky', value: 'The Brothers Karamazov' },
  { key: 'Lev Tolstoy', value: 'Anna Karenina' },
  { key: 'Fyodor Dostoevsky', value: 'Crime and Punishment' },
]

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  render: () => <Select options={books} />,
}

export const WithLabel: Story = {
  render: () => <Select options={books} label="books:" />,
}
