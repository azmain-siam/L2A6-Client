"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { IListing } from "@/types/listing";
import { removeCartItems } from "@/services/CartService";
import { toast } from "sonner";

const CartItems = ({
  cartItems,
  userId,
}: {
  cartItems: IListing[];
  userId: string;
}) => {
  const handleRemoveCartItem = async (itemId: string) => {
    try {
      const data = await removeCartItems(userId, itemId);
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          {cartItems?.map((item) => (
            <motion.div
              key={item._id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
            >
              <Image
                src={item.images[0]}
                alt={item.title}
                width={500}
                height={500}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.title}</h3>
                {/* <p className="text-sm text-gray-500">
                  Stock: item.productId.quantity
                </p> */}
                {/* <div className="flex items-center gap-2 mt-2">
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
                </div> */}
              </div>
              <div className="text-right">
                <p className="font-medium">$ {item.price.toFixed(2)}</p>
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
