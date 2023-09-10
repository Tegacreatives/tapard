"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import useRentModal from "@/app/hooks/useRentModal";

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const registerModal = useRegisterModal();

  //Toggles the navigation menu
  const toogleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    //Remember to change this
    if (currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, currentUser, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full border-[1px] text-red-500 border-red-500 hover:bg-neutral-100 transition cursor-pointer"
          onClick={onRent}
        >
          Sewo your house
        </div>

        <div className="hidden md:block border-neutral-200 border-[1px] p-2 rounded-full">
          <Image src="/images/flag.png" height="25" width="25" alt="Flag" />
        </div>
        <div
          onClick={toogleOpen}
          className="b-4 p-3 md:py-1 md:px-[5px] border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <div className="hidden md:flex items-center space-x-1">
            <Avatar src={currentUser?.image} />
            <h4 className="text-sm font-semibold ">
              {currentUser?.name ? currentUser.name : ""}
            </h4>
          </div>
          <div className="md:pr-[10px]">
            <AiOutlineMenu size={20} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40w] md:w-[3/4] bg-white overdlow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={loginModal.onOpen} label="My Reservations" />
                <MenuItem onClick={loginModal.onOpen} label="My Properties" />
                <MenuItem onClick={loginModal.onOpen} label="My Favourites" />
                <MenuItem onClick={onRent} label="Add a property" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Sign out" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
