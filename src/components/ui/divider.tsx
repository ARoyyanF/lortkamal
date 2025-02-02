import type React from "react";

interface DividerProps {
  children: React.ReactNode;
  className?: string;
}

export function Divider({ children, className = "" }: DividerProps) {
  return (
    <div className={`relative w-screen flex items-center break-words ${className}`}>
      <div className="flex-grow border-t"></div>
      <span className="text-wrap mx-4 text-popover text-center">{children}</span>
      <div className="flex-grow border-t"></div>
    </div>
  );
}
