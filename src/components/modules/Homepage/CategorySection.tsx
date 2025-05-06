import Link from "next/link";
import {
  Sofa,
  Tv,
  Shirt,
  Home,
  BookOpen,
  BikeIcon as Bicycle,
  Watch,
  Music,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CategorySection() {
  const categories = [
    {
      name: "Furniture",
      icon: <Sofa className="h-8 w-8 text-orange-500" />,
      count: 1245,
      slug: "furniture",
      color: "bg-orange-50",
    },
    {
      name: "Electronics",
      icon: <Tv className="h-8 w-8 text-emerald-500" />,
      count: 876,
      slug: "electronics",
      color: "bg-emerald-50",
    },
    {
      name: "Clothing",
      icon: <Shirt className="h-8 w-8 text-sky-500" />,
      count: 1532,
      slug: "clothing",
      color: "bg-sky-50",
    },
    {
      name: "Home Decor",
      icon: <Home className="h-8 w-8 text-purple-500" />,
      count: 943,
      slug: "home-decor",
      color: "bg-purple-50",
    },
    {
      name: "Books",
      icon: <BookOpen className="h-8 w-8 text-amber-500" />,
      count: 1087,
      slug: "books",
      color: "bg-amber-50",
    },
    {
      name: "Sports",
      icon: <Bicycle className="h-8 w-8 text-rose-500" />,
      count: 654,
      slug: "sports",
      color: "bg-rose-50",
    },
    {
      name: "Accessories",
      icon: <Watch className="h-8 w-8 text-indigo-500" />,
      count: 789,
      slug: "accessories",
      color: "bg-indigo-50",
    },
    {
      name: "Music",
      icon: <Music className="h-8 w-8 text-teal-500" />,
      count: 432,
      slug: "music",
      color: "bg-teal-50",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Browse Categories
            </h2>
            <p className="text-muted-foreground mt-2">
              Discover thousands of items across our popular categories
            </p>
          </div>
          <Link href="/products">
            <Button variant="outline" className="gap-1">
              View All Categories
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?categories=${category.slug}`}
            >
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <CardContent
                  className={`flex flex-col items-center justify-center p-6 ${category.color}`}
                >
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-center">{category.name}</h3>
                  {/* <p className="text-sm text-muted-foreground text-center">
                    {category.count} items
                  </p> */}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
