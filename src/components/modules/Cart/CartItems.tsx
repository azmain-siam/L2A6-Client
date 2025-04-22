"use client";

import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartItems = ({ cartItems }) => {
  // const [updateCart] = useAddToCartMutation();
  // const [removeFromCart] = useRemoveFromCartMutation();
  // const handleIncrease = (item: CartItem) => {
  //   setQuantity((prev) => {
  //     return prev.map((cartItem) => {
  //       if (cartItem.productId._id === item.productId._id) {
  //         return { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 };
  //       }
  //       return cartItem;
  //     });
  //   });
  // };

  // const handleDecrease = (item: CartItem) => {
  //   setQuantity((prev) => {
  //     return prev.map((cartItem) => {
  //       if (cartItem.productId._id === item.productId._id) {
  //         return { ...cartItem, cartQuantity: cartItem.cartQuantity - 1 };
  //       }
  //       return cartItem;
  //     });
  //   });
  // };

  const handleRemoveCartItem = async (itemId: string) => {
    // console.log(data, "data");
    // const deleteItem = {
    //   cartId: cartData.data._id,
    //   itemId,
    // };
    // await removeFromCart(deleteItem);
    // refetch();
    // toast.success("Removed item from cart!");
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     cartItems.forEach((item, idx) => {
  //       updateCart({
  //         userId: user?.id,
  //         productId: item.productId._id,
  //         quantity: quantity[idx].cartQuantity,
  //       });
  //     });
  //   }, 1000); // Debounce API call

  //   return () => clearTimeout(timer);
  // }, [cartItems, updateCart, quantity, user]);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="lg:col-span-2"
    >
      {cartItems?.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Your cart is empty</p>
          <Button className="mt-4" asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems?.map((item, idx) => (
            <motion.div
              key={item._id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
            >
              <img
                src={item.images[0]}
                // alt={item.productId.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium">item.productId.name</h3>
                <p className="text-sm text-gray-500">
                  Stock: item.productId.quantity
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="icon"
                    // onClick={() =>
                    //   updateQuantity(item.id, item.quantity - 1)
                    // }
                    // onClick={() => handleDecrease(item)}
                    // disabled={quantity[idx]?.cartQuantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">
                    quantity[idx]?.cartQuantity
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    // onClick={() => handleIncrease(item)}
                    // disabled={
                    //   quantity[idx]?.cartQuantity >= item.productId.quantity
                    // }
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">
                  $ ( item.productId.price * quantity?.[idx]?.cartQuantity
                  ).toFixed(2)
                </p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-600"
                  onClick={() => handleRemoveCartItem(item._id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default CartItems;
