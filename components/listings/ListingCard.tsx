"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { Listing, Reservation, User } from "@prisma/client";
import { MdBed } from "react-icons/md";
import { BiSolidBath } from "react-icons/bi";
import { BsPeopleFill, BsFillStarFill } from "react-icons/bs";

import useCountries from "@/app/hooks/useCountries";

import Button from "../Button";
import { SafeListing, SafeUser } from "@/app/types";
import { format } from "date-fns";
import HeartButton from "../HeartButton";

interface ListingCardProps {
  data: SafeListing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }
    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full h-[80%]">
        <div
          className="
            aspect-square 
            w-full
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={data.imageSrc}
            alt="Listing"
          />
          <div
            className="
            absolute
            top-3
            right-3
          "
          >
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>

        <div className="bg-gray-200 text-center px-[9px] py-1 max-w-max font-light text-[12px] rounded-full mx-1">
          {reservationDate || data.category}
        </div>
        <div className="flex items-center justify-between">
          <div className="font-light text-lg">{data.title}</div>
          <div className="flex space-x-2 items-center">
            <BsFillStarFill className="fill-yellow-500" />
            <div className="text-[12px]">4.73</div>
          </div>
        </div>
        <div className="font-semibold text-lg text-[12px] text-neutral-500">
          {location?.region}, {location?.label}
        </div>
        <div className="flex items-center justify-between">
          {/* Listing details */}
          <div className="border flex items-start space-x-2 border-neutral-gray-400 px-[9px] py-1 rounded-full">
            <div className="flex space-x-1 items-center justify-between">
              <MdBed />
              <div className="text-[12px]">{data.roomCount}</div>
            </div>
            <div className="flex space-x-1 items-center justify-between">
              <BiSolidBath />
              <div className="text-[12px]">{data.bathroomCount}</div>
            </div>
            <div className="flex space-x-1 items-center justify-between">
              <BsPeopleFill />
              <div className="text-[12px]">{data.guestCount}</div>
            </div>
          </div>
          {/* Listing Price */}
          <div className="flex flex-row items-center space-x-1">
            <div className="text-[13px] text-red-500 line-through">$90</div>
            <div>
              <div className="flex flex-row items-center gap-[3px]">
                <div className="font-semibold">${price}</div>
                {!reservation && (
                  <div className="font-light text-[12px] text-neutral-500">
                    /n
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
  );
};

export default ListingCard;
