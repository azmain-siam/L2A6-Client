import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { addToCart } from "@/services/CartService";
import { IListing } from "@/types/listing";
import { motion } from "framer-motion";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: IListing }) => {
  const { user } = useUser();

  const handleAddToCart = async () => {
    if (!user) {
      toast.warning("Please login first!");
      return;
    }
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
    <motion.div
      key={product._id}
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      // viewport={{ once: true }}
      className="group shadow-md hover:shadow-lg rounded-lg dark:border flex flex-col"
    >
      <div className="relative h-[200px] w-full overflow-hidden rounded-lg rounded-b-none bg-gray-100">
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
      <div className="mt-4 space-y-3 p-3 pt-0 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <h3 className="text-base font-medium">{product.title}</h3>
            <p className="text-base font-medium text-primary">
              ${product.price}
            </p>
          </div>
          <p className="text-sm text-gray-500">
            {product.description.length > 100
              ? product.description.slice(0, 100) + "..."
              : product.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{product.condition}</Badge>
          <div className="flex items-center gap-2">
            <Button variant="default" size="sm" asChild>
              <Link href={`/products/${product._id}`}>View Details</Link>
            </Button>
            <Button onClick={handleAddToCart} variant="outline" size="sm">
              {/* <Link href={`/products/${product._id}`}>View Details</Link> */}
              <ShoppingCartIcon />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
