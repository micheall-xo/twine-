import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  error?: string;
}

export function Checkbox({
  checked,
  onChange,
  label,
  disabled,
  error
}: CheckboxProps) {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <button
          type="button"
          role="checkbox"
          aria-checked={checked}
          disabled={disabled}
          onClick={() => onChange(!checked)}
          className={`
            h-4 w-4 rounded border
            focus:outline-none focus:ring-2 focus:ring-offset-2
            ${checked
              ? 'bg-blue-600 border-blue-600'
              : 'border-gray-300 dark:border-gray-600'
            }
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            ${error ? 'border-red-500' : ''}
          `}
        >
          {checked && (
            <Check className="h-3 w-3 text-white" />
          )}
        </button>
      </div>
      {label && (
        <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}