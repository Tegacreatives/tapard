'use client';

import Image from "next/image";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: string,
  categoryName: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon,
  categoryName,
  selected,
  onClick
}) => {
  return ( 
    <div
      onClick={() => onClick(categoryName)}
      className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-red-500
        transition
        cursor-pointer
        ${selected ? 'border-red-500' : 'border-neutral-200'}
      `}
    >
      <Image
      src={icon}
      width={20}
      height={20}
      alt={categoryName}
       />
      <div className="font-semibold">
        {categoryName}
      </div>
    </div>
   );
}
 
export default CategoryBox;