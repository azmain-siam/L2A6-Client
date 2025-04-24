"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IListing } from "@/types/listing";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

const OrderSummary = ({ cartItems }: { cartItems: IListing[] }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateAmount = () => {
      const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

      const taxAmount = (subtotal * 3) / 100;
      setTaxAmount(taxAmount);
      setSubtotal(subtotal);
      setTotal(subtotal + taxAmount);
    };

    calculateAmount();
  }, [cartItems]);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.id]: e.target.value });
  // };
  return (
    <div>
      {/* Order Summary */}
      {cartItems && cartItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Complete your purchase</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Platform fee (3%)</span>
                  <span>${taxAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping (Free)</span>
                  <span>0</span>
                </div>
                <div className="border-t pt-2 font-medium flex justify-between">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Shipping Address</Label>
                  <Input id="address" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postal">Postal Code</Label>
                    <Input id="postal" required />
                  </div>
                </div>
              </form>
            </CardContent>

            <CardFooter className="flex flex-col">
              {/* <StripePaymentModal
                handleSubmit={handleSubmit}
                amount={total}
                formData={formData}
              /> */}
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default OrderSummary;
