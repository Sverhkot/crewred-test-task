import React, { useEffect, useState } from 'react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  isOpen: boolean;
  onClose: () => void;
  showCloseButton?: boolean;
  backgroundColor?: string;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 3000,
  isOpen,
  onClose,
  showCloseButton = false,
  backgroundColor,
}) => {

  const [isRendered, setIsRendered] = useState(isOpen);

  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsRendered(false), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isRendered) return null;

  const typeStyles = {
    success: 'bg-green-100 text-green-800 border-green-200',
    error: 'bg-red-100 text-red-800 border-red-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200',
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 flex items-center p-4 min-w-[300px] border rounded-lg shadow-lg transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } ${typeStyles[type]}`}
      style={{ backgroundColor: backgroundColor }}
      role="alert"
    >
      <div className="text-sm font-medium flex-1">{message}</div>
      {showCloseButton && (
        <button
          onClick={onClose}
          className="ml-4 opacity-70 hover:opacity-100 focus:outline-none transition-opacity"
          aria-label="Close"
        >
          ✕
        </button>
      )}
    </div>
  );
};