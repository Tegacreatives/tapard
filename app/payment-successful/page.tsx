"use client";

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Range } from "react-date-range";
import dotenv from "dotenv";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

dotenv.config();

const paystackSecretKey = process.env.NEXT_PUBLIC_SECRET_PAYSTACK_KEY;

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface listingData {
  id: number;
  amount: number;
  metadata: {
    userID: string;
    listingId: string;
    startDate: string;
    endDate: string;
  };
}

// Import statements...

const PaymentSuccessful = ({
  searchParams,
}: {
  searchParams: { reference: string };
}) => {
  const [listingdata, setListingData] = useState<listingData | null>(null);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const reference = searchParams.reference;
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.paystack.co/transaction/verify/${reference}`,
          {
            headers: {
              Authorization: `Bearer ${paystackSecretKey}`,
            },
          }
        );

        const apiData = response.data.data;
        setListingData(apiData);

        const reservationData = {
          totalPrice: apiData?.amount / 100,
          listingId: apiData?.metadata.listingId,
          startDate: apiData?.metadata.startDate,
          endDate: apiData?.metadata.endDate,
        };

        await axios.post("/api/reservations", reservationData);

        toast.success("Listing reserved!");
        setDateRange(initialDateRange);
        router.push("/trips");
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error processing payment");
      }
    };

    if (reference) {
      fetchData();
    }
  }, [reference, router]);

  return (
    <div className="flex items-center justify-center pt-[400px] text-3xl">
      <div>Redirecting you to your trips...</div>
    </div>
  );
};

export default PaymentSuccessful;
