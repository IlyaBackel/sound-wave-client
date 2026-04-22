import type { FC } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  labelText: string;
  name: string;
  type: string;
  required: boolean;
  error?: string;
  register: UseFormRegisterReturn;
}

export const Input: FC<InputProps> = ({
  labelText,
  name,
  type,
  required,
  error,
  register,
}) => {
  return (
    <div className="flex flex-col gap-1 w-80 w-min-content">
      <label className="ml-3" htmlFor={name}>
        {labelText}
      </label>
      <input
        className="border-2 border-black w-full rounded-md mb-2 p-1"
        {...register}
        type={type}
        placeholder={`Enter ${name}`}
        required={required}
      />
      <p className="text-red-500">{error ? error : ' '}</p>
    </div>
  );
};
