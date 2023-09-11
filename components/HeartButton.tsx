"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { SafeUser } from "@/app/types";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  return (
    <div
      onClick={() => {}}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <AiOutlineHeart
        size={28}
        className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
      />
      <AiFillHeart size={24} />
    </div>
  );
};

export default HeartButton;
