import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ShoppingBag, TrendingUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const Instructions = () => {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge className="bg-primary hover:bg-primary/80" variant="default">
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Simple Steps to Buy or Sell
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Our platform makes it easy to buy or sell used items
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary to-secondary -translate-y-1/2"></div>
          <div className="flex flex-col items-center text-center space-y-4 card-hover bg-background rounded-xl p-6 shadow-lg relative z-10">
            <div className="bg-gradient-to-br from-primary to-primary/80 p-4 rounded-full text-white mb-2">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold shadow-md">
              1
            </div>
            <h3 className="text-xl font-bold">Create an Account</h3>
            <p className="text-muted-foreground">
              Sign up for free and set up your profile to start buying or
              selling.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 card-hover bg-background rounded-xl p-6 shadow-lg relative z-10">
            <div className="bg-gradient-to-br from-secondary to-secondary/80 p-4 rounded-full text-white mb-2">
              <TrendingUp className="h-8 w-8" />
            </div>
            <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white font-bold shadow-md">
              2
            </div>
            <h3 className="text-xl font-bold">List or Browse</h3>
            <p className="text-muted-foreground">
              Create listings for items you want to sell or browse existing
              items.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 card-hover bg-background rounded-xl p-6 shadow-lg relative z-10">
            <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full text-white mb-2">
              <Check className="h-8 w-8" />
            </div>
            <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold shadow-md">
              3
            </div>
            <h3 className="text-xl font-bold">Complete Transactions</h3>
            <p className="text-muted-foreground">
              Communicate with buyers/sellers and complete secure transactions.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/login">
            <Button
              size="lg"
              className="rounded-full shadow-lg hover:shadow-primary/20 transition-all"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Instructions;
