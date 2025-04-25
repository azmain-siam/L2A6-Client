"use server";

import { revalidateTag } from "next/cache";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";

export const createTransaction = async (payload: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: JSON.stringify(payload),
      }
    );

    revalidateTag("CART");
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};

export const completeTransaction = async (transactionId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions/${transactionId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );

    revalidateTag("CART");
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};
