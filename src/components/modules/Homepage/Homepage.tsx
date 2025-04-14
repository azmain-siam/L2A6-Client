import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ShoppingBag,
  Star,
  TrendingUp,
  Shield,
  Truck,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  // Sample featured products
  const featuredProducts = [
    {
      id: 1,
      title: "Vintage Leather Jacket",
      price: 120,
      condition: "Like New",
      image: "/placeholder.svg?height=300&width=300",
      seller: "Alex Johnson",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Mountain Bike",
      price: 350,
      condition: "Good",
      image: "/placeholder.svg?height=300&width=300",
      seller: "Sarah Miller",
      rating: 4.5,
    },
    {
      id: 3,
      title: "Smartphone",
      price: 280,
      condition: "Excellent",
      image: "/placeholder.svg?height=300&width=300",
      seller: "Mike Davis",
      rating: 4.9,
    },
    {
      id: 4,
      title: "Vintage Camera",
      price: 150,
      condition: "Good",
      image: "/placeholder.svg?height=300&width=300",
      seller: "Emma Wilson",
      rating: 4.7,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
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
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full"
                  >
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
                  <span className="text-xl font-bold text-primary-foreground">50%</span>
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

      {/* Trust Badges */}
      <section className="w-full py-8 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center justify-center">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-medium">Secure Payments</h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-medium">Fast Delivery</h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-medium">Easy Returns</h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-medium">Quality Guarantee</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <Badge
              className="bg-secondary hover:bg-secondary/80"
              variant="secondary"
            >
              Featured Items
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Discover Amazing Deals
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Check out these popular items from our marketplace
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {featuredProducts.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id}>
                <Card className="overflow-hidden group card-hover border-0 shadow-lg">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge
                        variant="secondary"
                        className="bg-secondary/90 hover:bg-secondary text-white"
                      >
                        {product.condition}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg truncate group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <p className="font-bold text-xl text-primary">
                        ${product.price}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="h-3.5 w-3.5 fill-secondary text-secondary mr-1" />
                        {product.rating}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Seller: {product.seller}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/products">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all"
              >
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
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
                Communicate with buyers/sellers and complete secure
                transactions.
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

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Start Selling?
              </h2>
              <p className="text-white/80 md:text-xl">
                Turn your unused items into cash. Join thousands of sellers on
                our platform today.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/login">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full shadow-lg hover:shadow-secondary/20 transition-all"
                  >
                    Create Account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-2 border-white text-white hover:bg-white/10 transition-all"
                  >
                    Browse Products
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="CTA Image"
                  className="rounded-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-bold">
                    Join 10,000+ users already on SwapSpot
                  </p>
                  <div className="flex -space-x-2 mt-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white"
                      ></div>
                    ))}
                    <div className="h-8 min-w-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold border-2 border-white px-2">
                      +5k
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
