"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addToCart = async (payload: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: (await cookies()).get("accessToken")!.value,
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
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    }
  );

  const data = await res.json();

  return data;
};

export const removeCartItems = async (userId: string, itemId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/cart/${userId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: JSON.stringify({ itemId }),
    }
  );
  revalidateTag("CART");

  if (!res.ok) {
    // Optional: Throw a meaningful error if something goes wrong
    const errorData = await res.json();
    throw new Error(errorData.message || "Failed to remove cart item");
  }

  return res.json();
};
