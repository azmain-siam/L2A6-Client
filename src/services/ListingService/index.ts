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

export const getSingleListing = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${productId}`
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};

export const updateListing = async (
  data: FormData,
  id: string
): Promise<any> => {
  try {
    console.log(data, "data");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`,
      {
        method: "PUT",
        body: data,
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );

    console.log(res.text(), "response");

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
