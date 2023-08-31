"use client";
import Container from "./Container";
import CategoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    categoryIcon: "/images/icons/hotel.png",
    categoryName: "Hotel",
  },
  {
    categoryIcon: "/images/icons/apartment.png",
    categoryName: "Apartment",
  },
  {
    categoryIcon: "/images/icons/villa.png",
    categoryName: "Villa",
  },
  {
    categoryIcon: "/images/icons/mansion.png",
    categoryName: "Mansion",
  },

  {
    categoryIcon: "/images/icons/cabin.png",
    categoryName: "Cabin",
  },
  {
    categoryIcon: "/images/icons/tiny-house.png",
    categoryName: "Tiny House",
  },
  {
    categoryIcon: "/images/icons/camp-house.png",
    categoryName: "Camp House",
  },
  {
    categoryIcon: "/images/icons/trailer.png",
    categoryName: "Trailer",
  },
  {
    categoryIcon: "/images/icons/tree-house.png",
    categoryName: "Tree House",
  },

  {
    categoryIcon: "/images/icons/beach-hut.png",
    categoryName: "Beach House",
  },
  {
    categoryIcon: "/images/icons/hangar.png",
    categoryName: "Hangar",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className=" justify-between items-center hidden md:flex">
        {categories.map((item) => (
          <CategoryBox
            key={item.categoryName}
            name={item.categoryName}
            icon={item.categoryIcon}
            selected={category === item.categoryName}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
