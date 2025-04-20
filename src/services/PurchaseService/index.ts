/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllPurchases = async (userId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/purchases/${userId}`
    );

    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
