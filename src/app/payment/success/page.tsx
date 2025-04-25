"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter, useSearchParams } from "next/navigation";
import { completeTransaction } from "@/services/TransactionService";
import { toast } from "sonner";

export default function PaymentSuccessPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const searchParams = useSearchParams();
  // const sessionId = searchParams.get("session_id");
  const transactionId = searchParams.get("transactionId");

  // Mock transaction data - in a real app, this would come from the payment processor

  // Countdown effect for auto-redirect
  useEffect(() => {
    if (countdown <= 0 && transactionId) {
      const complete = async () => {
        const res = await completeTransaction(transactionId);
        console.log(res);
        if (res.success === true) {
          toast.success(res.message);
          router.push("/dashboard/purchase-history");
        } else {
          toast.error("Something went wrong!");
        }
      };

      complete();
    }

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, transactionId, router]);

  return (
    <div className="container max-w-3xl mx-auto py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4"
        >
          <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-500" />
        </motion.div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Payment Successful!
        </h1>
        <p className="text-muted-foreground max-w-lg">
          Your payment has been processed successfully. We have sent a
          confirmation email with all the details. Redirecting to purchase
          history in<span className="ml-1 text-sm">({countdown})</span>...
        </p>

        <Button
          asChild
          variant="outline"
          className="w-full sm:w-auto gap-2 rounded-full mt-5"
        >
          <Link href="/dashboard">
            <Home className="h-4 w-4" />
            Go to Dashboard
            {countdown > 0 && (
              <span className="ml-1 text-xs">({countdown})</span>
            )}
          </Link>
        </Button>
      </motion.div>

      <Card className="border-0 shadow-lg overflow-hidden">
        {/* <CardHeader className="bg-gradient-to-r from-green-500/10 to-green-600/10 pb-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-green-600" />
              Order Confirmation
            </CardTitle>
            <Badge
              variant="outline"
              className="bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-500 dark:border-green-800"
            >
              Paid
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Transaction ID
                </span>
                <span className="font-medium">{transaction.id}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Date</span>
                <span>{transaction.date}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Payment Method
                </span>
                <span>{transaction.paymentMethod}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Seller</span>
                <span>{transaction.seller}</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h3 className="font-medium">Order Summary</h3>
              {transaction.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between items-center font-bold">
                <span>Total</span>
                <span>{transaction.amount}</span>
              </div>
            </div>

            <div className="rounded-lg bg-muted p-4">
              <h3 className="font-medium mb-2">What happens next?</h3>
              <p className="text-sm text-muted-foreground">
                The seller has been notified of your purchase. You will receive
                updates about shipping and delivery via email and in your
                purchase history.
              </p>
            </div>
          </div>
        </CardContent> */}
        {/* <CardFooter className="flex flex-col sm:flex-row gap-3 pt-2 pb-6">
          <Button asChild className="w-full sm:w-auto gap-2 rounded-full">
            <Link href="/dashboard/purchase-history">
              <Package className="h-4 w-4" />
              View Purchase
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto gap-2 rounded-full"
          >
            <Link href="/dashboard">
              <Home className="h-4 w-4" />
              Go to Dashboard
              {countdown > 0 && (
                <span className="ml-1 text-xs">({countdown})</span>
              )}
            </Link>
          </Button>
        </CardFooter> */}
      </Card>

      <div className="mt-0 text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Having trouble or questions about your order?
        </p>
        <Link href="/help" className="text-sm text-primary hover:underline">
          Contact our support team
        </Link>
      </div>
    </div>
  );
}
