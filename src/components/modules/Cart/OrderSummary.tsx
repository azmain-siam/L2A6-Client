"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@/context/UserContext";
import { createTransaction } from "@/services/TransactionService";
import { IListing } from "@/types/listing";
import { motion } from "motion/react";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

const OrderSummary = ({ cartItems }: { cartItems: IListing[] }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const { user } = useUser();

  console.log(user);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postal: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  // Check if all fields are filled
  useEffect(() => {
    const isComplete = Object.values(formData).every(
      (val) => val.trim() !== ""
    );
    setIsDisabled(!isComplete);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

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
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE as string
      );
      const payload = {
        buyerId: user?.id,
        // sellerId:
        items: cartItems,
        amounts: {
          subtotal,
          total,
          taxAmount,
        },
      };

      const data = await createTransaction(payload);

      stripe!.redirectToCheckout({
        sessionId: data.data.sessionId,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
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
                  <span>$0</span>
                </div>
                <div className="border-t pt-2 font-medium flex justify-between">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <form onSubmit={handleCheckout} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Shipping Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postal">Postal Code</Label>
                    <Input
                      id="postal"
                      value={formData.postal}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <Button
                  variant={"default"}
                  className="w-full cursor-pointer"
                  type="submit"
                  // onClick={handleCheckout}
                  disabled={isDisabled}
                >
                  {loading ? (
                    <Loader className="animate-spin !size-5" />
                  ) : (
                    "Checkout"
                  )}
                </Button>
              </form>
            </CardContent>

            {/* <CardFooter className="flex flex-col">
              <Button
                variant={"default"}
                onClick={handleCheckout}
                className="cursor-pointer"
              >
                Checkout
              </Button> */}
            {/* <StripePaymentModal
                handleSubmit={handleSubmit}
                amount={total}
                formData={formData}
              /> */}
            {/* </CardFooter> */}
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default OrderSummary;
