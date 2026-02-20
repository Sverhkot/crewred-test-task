import React, { useState } from 'react';

export interface MenuItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

export interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  title?: string;
  logo?: React.ReactNode;
}

const NavItem: React.FC<{ item: MenuItem; depth?: number }> = ({ item, depth = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="w-full font-sans">
      <div
        className={`flex items-center justify-between px-5 py-3 cursor-pointer transition-colors duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 ${isExpanded ? 'text-slate-900 font-medium' : ''
          }`}
        style={{ paddingLeft: depth === 0 ? '1.25rem' : `${(depth * 1.5) + 3}rem` }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          {item.icon ? (
            <span className="flex items-center justify-center w-6 h-6 text-slate-400">
              {item.icon}
            </span>
          ) : depth === 0 ? (
            <span className="w-6 h-6" />
          ) : null}
          <span className="text-[15px]">{item.label}</span>
        </div>

        {hasChildren && (
          <span
            className={`text-[10px] text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
              }`}
          >
            ▼
          </span>
        )}
      </div>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
      >
        <div className="overflow-hidden bg-slate-50/50">
          {item.children?.map((child, index) => (
            <NavItem key={index} item={child} depth={depth + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  onClose,
  items,
  title = 'Pro Sidebar',
  logo,
}) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            {logo && <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">{logo}</div>}
            <h2 className="text-lg font-bold text-slate-800 tracking-tight">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 focus:outline-none"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-5 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            General
          </div>
          {items.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};