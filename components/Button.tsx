import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyle = "px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-300";
  
  const variants = {
    primary: "bg-rose-400 text-white hover:bg-rose-500 shadow-lg shadow-rose-200",
    secondary: "bg-white text-rose-500 hover:bg-rose-50 shadow-md",
    outline: "border-2 border-rose-300 text-rose-500 hover:bg-rose-50"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};