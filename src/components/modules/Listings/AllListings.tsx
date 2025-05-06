"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { IListing } from "@/types/listing";
import FilterSidebar from "./FilterSidebar";
import { useSearchParams } from "next/navigation";

export interface IProduct {
  _id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  description: string;
  quantity: number;
  inStock: boolean;
  image: string;
}

const categories = [
  "All Category",
  "Furniture",
  "Electronics",
  "Clothing",
  "Home Decor",
  "Books",
  "Sports",
  "Accessories",
  "Music",
];
const condition = ["All Condition", "Used", "Refurbished", "New"];

export default function AllListings({ products }: { products: IListing[] }) {
  const searchParams = useSearchParams();

  // const [products, setProducts] = useState<IProduct[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] =
    useState<IListing[]>(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [selectedCondtion, setSelectedCondition] = useState("All Condition");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [showInStock, setShowInStock] = useState(true);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(() => {
    const handleSetCategory = () => {
      const category = searchParams.get("categories");

      setSelectedCategory(category as string);
    };

    handleSetCategory();
  }, [searchParams]);

  // Filter products based on all criteria
  useEffect(() => {
    if (!products) return;
    let filtered = [...products];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCondtion !== "All Condition") {
      filtered = filtered.filter(
        (product) => product.condition === selectedCondtion
      );
    }

    // Category filter
    if (selectedCategory !== "All Category") {
      filtered = filtered.filter(
        (product) =>
          product?.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Price range filter
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Stock filter
    if (showInStock) {
      filtered = filtered.filter((product) => product.status === "available");
    }

    // Update active filters
    const newActiveFilters: string[] = [];

    if (selectedCondtion !== "All Condition")
      newActiveFilters.push(selectedCondtion);

    if (selectedCategory !== "All Category")
      newActiveFilters.push(selectedCategory);

    if (showInStock) newActiveFilters.push("In Stock Only");

    if (priceRange[0] > 0 || priceRange[1] < 100)
      newActiveFilters.push(`$${priceRange[0]} - $${priceRange[1]}`);

    setActiveFilters(newActiveFilters);

    setFilteredProducts(filtered);
  }, [
    searchTerm,
    selectedCondtion,
    priceRange,
    showInStock,
    products,
    selectedCategory,
    searchParams,
  ]);

  const removeFilter = (filter: string) => {
    if (filter === "In Stock Only") {
      setShowInStock(false);
    } else if (filter.includes("$")) {
      setPriceRange([0, 50000]);
    } else {
      setSelectedCondition("All Condition");
      setSelectedCategory("All Category");
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header and Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Products</h1>
          <p className="text-gray-600">Browse products to buy</p>
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1 md:w-[300px]">
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>

          {/* filter sidebar */}
          <FilterSidebar
            setIsFiltersOpen={setIsFiltersOpen}
            isFiltersOpen={isFiltersOpen}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedCondtion={selectedCondtion}
            setSelectedCondition={setSelectedCondition}
            categories={categories}
            condition={condition}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            showInStock={showInStock}
            setShowInStock={setShowInStock}
          />
        </div>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {activeFilters.map((filter) => (
            <Badge
              key={filter}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {filter}
              <button
                onClick={() => removeFilter(filter)}
                className="ml-1 hover:text-primary"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}

      {/* Products Grid */}
      <AnimatePresence mode="wait">
        {filteredProducts?.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
          >
            <p className="text-gray-500">
              No products found matching your criteria
            </p>
            <Button
              variant="link"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All Categories");
                setPriceRange([0, 50000]);
                setShowInStock(false);
              }}
            >
              Clear all filters
            </Button>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredProducts?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
