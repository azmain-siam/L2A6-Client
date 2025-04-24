"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  XCircle,
  AlertTriangle,
  RefreshCw,
  HelpCircle,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PaymentErrorPage() {
  const [isRetrying, setIsRetrying] = useState(false);

  // Mock error data - in a real app, this would come from the payment processor
  const error = {
    code: "PAYMENT_FAILED",
    message: "Your payment could not be processed at this time.",
    details:
      "The transaction was declined by your bank. Please try a different payment method or contact your bank for more information.",
    transactionId:
      "TRX-" +
      Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, "0"),
    timestamp: new Date().toISOString(),
  };

  const handleRetry = () => {
    setIsRetrying(true);
    // Simulate a retry process
    setTimeout(() => {
      setIsRetrying(false);
      // In a real app, you would redirect to the payment page
      // router.push("/checkout")
    }, 2000);
  };

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
          className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4"
        >
          <XCircle className="h-10 w-10 text-red-600 dark:text-red-500" />
        </motion.div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Payment Failed
        </h1>
        <p className="text-muted-foreground max-w-md">
          We encountered an issue while processing your payment. Do not worry,
          your account has not been charged.
        </p>
      </motion.div>

      <Card className="border-0 shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-red-500/10 to-red-600/10 pb-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              Error Details
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800">
              <p className="text-red-700 dark:text-red-400">{error.message}</p>
              <p className="text-sm text-red-600/80 dark:text-red-400/80 mt-1">
                {error.details}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Error Code
                </span>
                <span className="font-mono text-sm">{error.code}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Transaction ID
                </span>
                <span className="font-mono text-sm">{error.transactionId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Timestamp</span>
                <span className="text-sm">
                  {new Date(error.timestamp).toLocaleString()}
                </span>
              </div>
            </div>

            <Separator />

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="common-issues">
                <AccordionTrigger>Common Issues</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Insufficient funds in your account</li>
                    <li>Card expired or card details entered incorrectly</li>
                    <li>
                      Transaction flagged by your bank is fraud detection system
                    </li>
                    <li>Payment method not supported for this transaction</li>
                    <li>
                      Network or connectivity issues during payment processing
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="what-to-do">
                <AccordionTrigger>What to do next</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>Try again with the same payment method</li>
                    <li>Use a different payment method</li>
                    <li>Contact your bank to authorize the transaction</li>
                    <li>Check your internet connection and try again</li>
                    <li>Contact our support team if the issue persists</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3 pt-2 pb-6">
          <Button
            onClick={handleRetry}
            disabled={isRetrying}
            className="w-full sm:w-auto gap-2 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all"
          >
            {isRetrying ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" />
                Retrying...
              </>
            ) : (
              <>
                <RefreshCw className="h-4 w-4" />
                Try Again
              </>
            )}
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto gap-2 rounded-full"
          >
            <Link href="/help">
              <HelpCircle className="h-4 w-4" />
              Contact Support
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="w-full sm:w-auto gap-2 rounded-full"
          >
            <Link href="/dashboard">
              <Home className="h-4 w-4" />
              Go to Dashboard
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Your items are still saved in your cart. You can try again later.
        </p>
      </div>
    </div>
  );
}
