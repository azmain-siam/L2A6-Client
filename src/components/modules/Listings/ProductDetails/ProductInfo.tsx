"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from "@/context/UserContext";
import { addToCart } from "@/services/CartService";
import { IListing } from "@/types/listing";
import {
  CheckCircle,
  Heart,
  Lock,
  Mail,
  Phone,
  Star,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const ProductInfo = ({ product }: { product: IListing }) => {
  const { user } = useUser();

  const handleAddToCart = async () => {
    if (product.status === "sold") {
      return toast.error("Product already sold!");
    }

    try {
      const data = {
        user: user?.id,
        productId: product._id,
      };

      const res = await addToCart(data);
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="aspect-square overflow-hidden rounded-lg border bg-gray-100">
            <motion.img
              // key={selectedImage.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={
                product.images[0] ||
                "https://i.ibb.co.com/4R9WNWB0/rsz-1joanna-kosinska-bf2vsubyhcq-unsplash.jpg"
              }
              alt={"selectedImage.alt"}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h1 className="text-3xl font-bold flex gap-2 items-center">
              {product.title}{" "}
              <Badge
                className="hover:bg-primary font-medium"
                variant={"default"}
              >
                {product.condition}
              </Badge>
            </h1>
            <div className="text-2xl font-bold text-primary">
              ${product.price}
            </div>
          </div>

          <p className="text-gray-600">
            {product.description.length > 100
              ? product.description.split(". ").slice(0, 3).join(". ") + "..."
              : product.description}
          </p>

          {/* Color Selection */}
          {/* <div className="space-y-2">
            <h3 className="font-medium">Color</h3>
            <div className="flex space-x-2">
              {["bg-brown-500", "bg-black", "bg-blue-700"].map((color) => (
                <motion.button
                  key={color}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-8 w-8 rounded-full ${color} border-2 border-white ring-2 ring-gray-200`}
                />
              ))}
            </div>
          </div> */}

          {/* Quantity Selector */}
          {/* <div className="space-y-2">
            <h3 className="font-medium">Quantity</h3>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                // onClick={decreaseQuantity}
                // disabled={quantity <= 1}
                className="cursor-pointer"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">1</span>
              <Button
                variant="outline"
                size="icon"
                // onClick={increaseQuantity}
                className="cursor-pointer"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div> */}

          <div className="border-y p-2">
            <div className="flex items-center gap-3 py-2">
              <Image
                src="https://i.ibb.co.com/vkcW97y/dummy-man-570x570-1-2.png"
                alt="Seller Avatar"
                width={200}
                height={200}
                className="w-10 h-10 rounded-full object-cover border"
              />
              <div>
                <h4 className="font-semibold text-sm">{product.userId.name}</h4>
                <p className="text-xs text-gray-500">
                  Top Rated Seller · 120 sales
                </p>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="grid grid-cols-2 gap-3">
            {/* Wishlist Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                disabled={user?.id === product.userId._id}
                onClick={handleAddToCart}
                className="w-full h-10 cursor-pointer"
              >
                <Heart />
                Wishlist Item
              </Button>
            </motion.div>

            {/* Call & Email Buttons */}

            <div className="grid grid-cols-2 gap-3">
              <Link href={`tel:${product.userId.phone}`}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    disabled={user?.id === product.userId._id}
                    onClick={handleAddToCart}
                    className="w-full h-10 cursor-pointer bg-white border border-primary text-primary hover:text-white hover:bg-primary"
                  >
                    <Phone /> Call
                  </Button>
                </motion.div>
              </Link>

              <Link href={`mailto:${product.userId.email}`}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    disabled={user?.id === product.userId._id}
                    onClick={handleAddToCart}
                    className="w-full h-10 cursor-pointer bg-white border border-primary text-primary hover:text-white hover:bg-primary"
                  >
                    <Mail /> Email
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
            <div className="flex items-center space-x-2 text-sm">
              <Truck className="h-5 w-5 text-gray-600" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <CheckCircle className="h-5 w-5 text-gray-600" />
              <span>Verified Seller</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Lock className="h-5 w-5 text-gray-600" />
              <span>Secure Payment</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none">
              <p>{product.description}</p>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Dimensions</h4>
                  <p className="text-gray-600">8.5 x 5.5 inches</p>
                </div>
                <div>
                  <h4 className="font-medium">Paper Weight</h4>
                  <p className="text-gray-600">120 GSM</p>
                </div>
                <div>
                  <h4 className="font-medium">Number of Pages</h4>
                  <p className="text-gray-600">240 pages (120 sheets)</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Material</h4>
                  <p className="text-gray-600">Genuine Leather Cover</p>
                </div>
                <div>
                  <h4 className="font-medium">Binding</h4>
                  <p className="text-gray-600">Sewn Binding</p>
                </div>
                <div>
                  <h4 className="font-medium">Features</h4>
                  <p className="text-gray-600">
                    Ribbon Bookmark, Elastic Closure
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border-b pb-6 last:border-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`h-4 w-4 ${
                            j < 4
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">John Doe</span>
                  </div>
                  <p className="text-gray-600">
                    Great quality journal! The leather is beautiful and the
                    paper quality is excellent. Perfect for my daily journaling
                    practice.
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductInfo;
