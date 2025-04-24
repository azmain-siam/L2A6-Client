import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IListing } from "@/types/listing";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: IListing }) => {
  return (
    <motion.div
      key={product._id}
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      // viewport={{ once: true }}
      className="group shadow-md hover:shadow-lg rounded-lg dark:border"
    >
      <div className="relative h-[250px] w-full overflow-hidden rounded-lg rounded-b-none bg-gray-100">
        <Image
          src={
            product.images[0] ||
            "https://res.cloudinary.com/db0ecop7c/image/upload/v1745233235/kxnjsi5gfo0p7fmyzw3r.jpg"
          }
          width={1000}
          height={500}
          alt={product.title}
          className="h-full w-full object-contain object-center transition-transform group-hover:scale-105"
        />
        {product.status !== "available" && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-medium">Sold</span>
          </div>
        )}
      </div>
      <div className="mt-4 space-y-3 p-3 pt-0">
        <div className="flex justify-between">
          <h3 className="text-base font-medium">{product.title}</h3>
          <p className="text-base font-medium text-primary">${product.price}</p>
        </div>
        <p className="text-sm text-gray-500">
          {product.description.length > 100
            ? product.description.slice(0, 100) + "..."
            : product.description}
        </p>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{product.condition}</Badge>
          <Button variant="default" size="sm" asChild>
            <Link href={`/products/${product._id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
