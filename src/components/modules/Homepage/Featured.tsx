import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getListings } from "@/services/ListingService";
import { IListing } from "@/types/listing";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Featured = async () => {
  let products: IListing[] = [];

  try {
    const { data } = await getListings();
    products = data;
  } catch (error) {
    console.error("Error loading products", error);
  }

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container max-w-7xl px-4 md:px-6 mx-auto">
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
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-second rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.length > 0 ? (
            products.slice(0, 4).map((product: IListing) => (
              <Link href={`/products/${product._id}`} key={product._id}>
                <Card className="overflow-hidden group card-hover border-0 shadow-lg">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge
                        variant="default"
                        // className="bg-primary-second/90 hover:bg-primary-second text-white"
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
                      {/* <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-3.5 w-3.5 fill-secondary text-secondary mr-1" />
                      {product.rating}
                    </div> */}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Seller: {product.userId?.name}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/products">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all cursor-pointer"
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
