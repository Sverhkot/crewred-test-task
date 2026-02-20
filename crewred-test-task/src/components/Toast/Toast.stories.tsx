import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast, type ToastProps } from './Toast';

type ToastStoryProps = Omit<ToastProps, 'isOpen' | 'onClose'>;

const meta = {
  title: 'Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<ToastStoryProps>;

const ToastStoryWrapper = (args: ToastStoryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 h-40">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Trigger {args.type} Toast
      </button>
      <Toast {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export const Success: Story = {
  render: (args) => <ToastStoryWrapper {...args} />,
  args: {
    type: 'success',
    message: 'Success message',
    duration: 3000,
    showCloseButton: true,
  },
};

export const Error: Story = {
  render: (args) => <ToastStoryWrapper {...args} />,
  args: {
    type: 'error',
    message: 'Error message',
    duration: 5000,
    showCloseButton: true,
  },
};

export const Warning: Story = {
  render: (args) => <ToastStoryWrapper {...args} />,
  args: {
    type: 'warning',
    message: 'Warning message',
    duration: 5000,
    showCloseButton: true,
  },
};

export const PersistentInfo: Story = {
  render: (args) => <ToastStoryWrapper {...args} />,
  args: {
    type: 'info',
    message: 'Info message(requires manual closing; duration = 0)',
    duration: 0,
    showCloseButton: true,
  },
};

export const CustomColor: Story = {
  render: (args) => <ToastStoryWrapper {...args} />,
  args: {
    type: 'info',
    message: 'This toast has a custom purple background!',
    backgroundColor: '#d8b4fe',
    duration: 5000,
    showCloseButton: true,
  },
};