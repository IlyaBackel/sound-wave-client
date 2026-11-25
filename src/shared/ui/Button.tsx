export const Button = ({ label, className = '' }: { label: string, className?: string }) => {
  return <button
    type="submit"
    className={`shadow-lg rounded-4xl w-min-content py-2 px-4 text-lg ${className}`}>
    {label}
  </button>;
};
