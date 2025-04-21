import { IProduct } from "@/app/(commonLayout)/all/page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <motion.div
      key={product._id}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group shadow-md hover:shadow-lg rounded-lg dark:border"
    >
      <div className="relative h-[250px] w-full aspect-square overflow-hidden rounded-lg rounded-b-none bg-gray-100">
        <Image
          src={
            product.image ||
            "https://i.ibb.co.com/4R9WNWB0/rsz-1joanna-kosinska-bf2vsubyhcq-unsplash.jpg"
          }
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-medium">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="mt-4 space-y-3 p-3 pt-0">
        <div className="flex justify-between">
          <h3 className="text-base font-medium">{product.name}</h3>
          <p className="text-base font-medium text-primary">${product.price}</p>
        </div>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{product.category}</Badge>
          <Button variant="default" size="sm" asChild>
            <Link href={`/products/${product._id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
