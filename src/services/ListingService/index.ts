/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { cookies } from "next/headers";

export const addListing = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getListings = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
      // next: {
      //   tags: ["LISTING"],
      // },
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteListing = async (id: string) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`,
      {
        method: "DELETE",
      }
    );

    console.log(result);
    return result;
    // return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};
