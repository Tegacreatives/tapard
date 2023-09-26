import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const body = await request.json();
  const { reference } = body;
  const res = await fetch(
    "https://api.paystack.co/transaction/verify/51bwzqrpry/bge38zcroa",
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    }
  );

  const product = await res.status;
  console.log(product);

  return NextResponse.json({ product });
}
