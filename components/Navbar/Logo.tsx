"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="hidden md:block cursor-pointer font-bold text-[2rem] text-red-600"
      onClick={() => router.push("/")}
    >
      .Hide..
    </div>
  );
};

export default Logo;
