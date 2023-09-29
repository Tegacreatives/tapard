"use clinet";
import React from "react";
interface MenuItemProps {
  onClick: () => void;
  label: string;
  testId?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, testId }) => {
  return (
    <div
      data-testid={testId}
      className="px-4 py-3  hover:bg-neutral-100 transition font-semibold"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default MenuItem;
