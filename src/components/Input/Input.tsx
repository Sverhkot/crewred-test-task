import React, { useState, forwardRef } from 'react';
import { SearchIcon, EyeIcon, EyeOffIcon } from '../icons';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
  onClear?: () => void;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  type = 'text',
  clearable = false,
  value,
  onChange,
  onClear,
  error,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;
  const isPassword = type === 'password';
  const isSearch = type === 'search';
  const hasValue = value !== undefined && value !== '';

  const baseInputClasses = [
    'w-full py-2 pr-12 border rounded-lg text-gray-800',
    'outline-none transition-all',
    isSearch ? 'pl-10' : 'px-4',
  ].join(' ');

  const stateClasses = error
    ? 'border-red-500 focus:ring-2 focus:ring-red-200 focus:border-red-500'
    : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

  return (
    <div className="relative w-full max-w-sm flex flex-col gap-1">
      <div className="relative w-full">
        {isSearch && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2
            text-gray-400 pointer-events-none">
            <SearchIcon />
          </div>
        )}
        <input
          ref={ref}
          type={inputType}
          value={value}
          onChange={onChange}
          className={`${baseInputClasses} ${stateClasses}`}
          {...props}
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2
          flex items-center">
          {clearable && hasValue && !isPassword && (
            <button
              type="button"
              onClick={onClear}
              className="text-gray-400 hover:text-gray-700 focus:outline-none"
              title="Clear input"
            >
              ✕
            </button>
          )}
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="flex items-center justify-center p-1
                text-gray-500 hover:text-gray-800 focus:outline-none"
              title={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          )}
        </div>
      </div>

      {error && <span className="text-sm text-red-500 font-medium pl-1">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';