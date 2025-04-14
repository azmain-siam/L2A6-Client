import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10"></div>
      <div className="container max-w-7xl mx-auto relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 animate-fade-up">
            <div className="space-y-2">
              <Badge
                className="inline-block mb-2 bg-primary cursor-default"
                variant="default"
              >
                New Items Added Daily
              </Badge>
              <h1 className="text-3xl font-bold tracking-normal sm:text-5xl xl:text-6xl/none">
                Buy & Sell Used Items with{" "}
                <span className="text-gradient">Confidence</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join our community of buyers and sellers. Find great deals or
                make money from items you no longer need.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/products">
                <Button
                  size="lg"
                  className="gap-1 rounded-full shadow-lg hover:shadow-primary/20 transition-all"
                >
                  Browse Products
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="rounded-full">
                  Start Selling
                </Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 relative animate-fade-in">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 animate-pulse-slow"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Hero Image"
                className="rounded-2xl object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-secondary/20 backdrop-blur-md p-2 animate-float">
              <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                <span className="text-xl font-bold">
                  50%
                </span>
              </div>
            </div>
            <div
              className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-primary/20 backdrop-blur-md p-2 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                <span className="text-lg font-bold text-primary">New</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
