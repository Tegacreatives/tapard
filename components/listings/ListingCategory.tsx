"use client";

import Image from "next/image";
import { IconType } from "react-icons";

interface CategoryViewProps {
  categoryIcon: string;
  categoryName: string;
  //   description: string;
}

const CategoryView: React.FC<CategoryViewProps> = ({
  categoryIcon,
  categoryName,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <Image src={categoryIcon} height="30" width="30" alt={categoryName} />
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{categoryName}</div>
          {/* <div className="text-neutral-500 font-light">{description}</div> */}
        </div>
      </div>
    </div>
  );
};

export default CategoryView;
