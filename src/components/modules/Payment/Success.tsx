"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { completeTransaction } from "@/services/TransactionService";
import { toast } from "sonner";

const Success = () => {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("transactionId");
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown <= 0 && transactionId) {
      const complete = async () => {
        const res = await completeTransaction(transactionId);
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
  }, [countdown, router, transactionId]);
  return (
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
        confirmation email with all the details. Redirecting to purchase history
        in<span className="ml-1 text-sm">({countdown})</span>...
      </p>

      <Button
        asChild
        variant="outline"
        className="w-full sm:w-auto gap-2 rounded-full mt-5"
      >
        <Link href="/dashboard">
          <Home className="h-4 w-4" />
          Go to Dashboard
          {countdown > 0 && <span className="ml-1 text-xs">({countdown})</span>}
        </Link>
      </Button>
    </motion.div>
  );
};

export default Success;
