import { useForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Input } from './Input';

const meta = {
  title: 'Forms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'number', 'search'],
      description: 'The type of input field',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const InputWithState = (args: any) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <Input
      key={args.type}
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue('')}
    />
  );
};

export const DefaultText: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    type: 'text',
    placeholder: 'Enter your text...',
  },
};

export const PasswordWithEyeIcon: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    type: 'password',
    placeholder: 'Enter your password...',
    value: 'secret123',
  },
};

export const Clearable: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    type: 'text',
    clearable: true,
    value: 'Click the X to clear me!',
  },
};
export const WithError: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    type: 'text',
    placeholder: 'Enter your name...',
    value: 'invalid value',
    error: 'This field contains an error.',
  },
};

export const Search: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
};

const ReactHookFormWrapper = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    alert(`Form submitted successfully!\n\n${JSON.stringify(data, null, 2)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 bg-slate-50 border border-slate-200 rounded-xl max-w-sm">
      <h3 className="text-lg font-bold text-slate-800">Login Form</h3>
      <p className="text-sm text-slate-500 mb-4">Powered by React Hook Form</p>

      <Input
        type="email"
        placeholder="Enter your email"
        {...register('email', { required: 'Email is required' })}
        error={errors.email?.message as string}
      />

      <Input
        type="password"
        placeholder="Enter your password"
        {...register('password', {
          required: 'Password is required',
          minLength: { value: 6, message: 'Password must be at least 6 characters' }
        })}
        error={errors.password?.message as string}
      />

      <button
        type="submit"
        className="w-full mt-2 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
      >
        Sign In
      </button>
    </form>
  );
};

export const WithReactHookForm: Story = {
  render: () => <ReactHookFormWrapper />,
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates seamless integration with **React Hook Form**. It uses `forwardRef` to pass the ref down to the native input, allowing RHF to manage state and validation natively without extra wrappers.',
      },
    },
  },
};