import React, { useState, forwardRef } from 'react';

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
  className = '',
  error,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;
  const isPassword = type === 'password';
  const hasValue = value !== undefined && value !== '';

  const baseInputClasses = "w-full px-4 py-2 border rounded-lg outline-none transition-all pr-12 text-gray-800";
  const stateClasses = error
    ? "border-red-500 focus:ring-2 focus:ring-red-200 focus:border-red-500"
    : "border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

  return (
    <div className={`relative w-full max-w-sm flex flex-col gap-1 ${className}`}>
      <div className="relative w-full">
        <input
          ref={ref}
          type={inputType}
          value={value}
          onChange={onChange}
          className={`${baseInputClasses} ${stateClasses}`}
          {...props}
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
          {clearable && hasValue && !isPassword && (
            <button type="button" onClick={onClear} className="text-gray-400 hover:text-gray-700 focus:outline-none" title="Clear input">✕</button>
          )}
          {isPassword && (
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-500 hover:text-gray-800 focus:outline-none flex items-center justify-center p-1" title={showPassword ? "Hide password" : "Show password"}>
              {showPassword ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              )}
            </button>
          )}
        </div>
      </div>

      {error && <span className="text-sm text-red-500 font-medium pl-1">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';