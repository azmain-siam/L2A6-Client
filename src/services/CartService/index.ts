"use server";

import { revalidateTag } from "next/cache";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addToCart = async (payload: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  revalidateTag("CART");

  const data = await res.json();

  return data;
};

export const getCartItems = async (userId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/cart/${userId}`,
    {
      next: {
        tags: ["CART"],
      },
    }
  );

  const data = await res.json();

  return data;
};
