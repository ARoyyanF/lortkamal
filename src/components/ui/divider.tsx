import type React from "react";

interface DividerProps {
  children: React.ReactNode;
  className?: string;
}

export function Divider({ children, className = "" }: DividerProps) {
  return (
    <div className={`relative w-screen flex items-center${className}`}>
      <div className="flex-grow border-t"></div>
      <span className="flex-shrink-0 mx-4 text-popover">{children}</span>
      <div className="flex-grow border-t"></div>
    </div>
  );
}
