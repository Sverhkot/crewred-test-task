import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SidebarMenu, type SidebarMenuProps } from './SidebarMenu';

const meta = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    items: { control: false },
  },
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<Omit<SidebarMenuProps, 'isOpen' | 'onClose'>>;

const SidebarWrapper = (args: Omit<SidebarMenuProps, 'isOpen' | 'onClose'>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8 h-screen bg-gray-50">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors shadow-md"
      >
        Open Sidebar
      </button>
      <SidebarMenu {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

const DashboardIcon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" /><rect x="14" y="3" width="7" height="5" /><rect x="14" y="12" width="7" height="9" /><rect x="3" y="16" width="7" height="5" /></svg>;
const ShoppingCartIcon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>;
const SettingsIcon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>;

const nestedMenuData = [
  { label: 'Dashboard', icon: DashboardIcon },
  {
    label: 'E-commerce',
    icon: ShoppingCartIcon,
    children: [
      { label: 'Products' },
      {
        label: 'Orders',
        children: [
          { label: 'Pending' },
          { label: 'Completed' },
        ]
      },
      { label: 'Customers' }
    ]
  },
  {
    label: 'Settings',
    icon: SettingsIcon,
    children: [
      { label: 'Profile' },
      { label: 'Security' }
    ]
  }
];

export const NestedMenu: Story = {
  render: (args) => <SidebarWrapper {...args} />,
  args: {
    title: 'Pro UI',
    items: nestedMenuData,
  },
};