/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import axios from "axios";
import { revalidateTag } from "next/cache";
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
      next: {
        tags: ["LISTING"],
      },
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const getListingsOfUser = async (userId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/user/${userId}`,
      {
        next: {
          tags: ["LISTING"],
        },
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
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
    revalidateTag("LISTING");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const updateListingStatus = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/status/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );

    revalidateTag("LISTING");
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteListing = async (id: string) => {
  try {
    const result = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`,
      {
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );

    revalidateTag("LISTING");

    return result.status;
  } catch (error: any) {
    return Error(error);
  }
};
