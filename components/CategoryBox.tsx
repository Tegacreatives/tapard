"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import React, { useCallback } from "react";
interface CategoryBoxProps {
  icon: string;
  name: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  name,
  icon: Icon,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: name,
    };

    if (params?.get("category") === name) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      {
        skipNull: true,
      }
    );

    router.push(url);
  }, [name, params, router]);
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center transition hover:border-b-[1px] hover:border-b-red-500 cursor-pointer
                ${
                  selected
                    ? "border-b-red-500 border-b-[1px] text-red-500"
                    : "border-transparent "
                }
            `}
    >
      <Image src={Icon} height="30" width="30" alt={name} />
      <div className="font-medium text-sm">{name}</div>
    </div>
  );
};

export default CategoryBox;
