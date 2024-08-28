"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export default function Button({ children, className, appName }: ButtonProps) {
  return (
    <button
      className={`bg-white text-neutral-900 shadow-sm shadow-black rounded-full p-2 pr-8 pl-8 m-2 ${className}`}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
}
