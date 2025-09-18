import Image from "next/image";
import React from "react";
import { ProductType } from "../../../../store/types/type";
import {
  IconArrowRight,
  IconCaretDown,
  IconMinus,
  IconPlus,
  IconStopwatch,
} from "@tabler/icons-react";
import { handleCartUpdate } from "../../../../utils/utils";
import ProductDetailClient from "../../components/app/HomePage/ProductDetailClient";

const whyShopFromBlinkit = [
  {
    title: "Superfast Delivery",
    description:
      "Get your order delivered to your doorstep at the earliest from dark stores near you.",
    img: "/images/why-us-1.png",
  },
  {
    title: "Best Prices & Offers",
    description:
      "Best price destination with offers directly from the manufacturers.",
    img: "/images/why-us-2.png",
  },
  {
    title: "Wide Assortment",
    description:
      "Choose from 5000+ products across food, personal care, household & other categories.",
    img: "/images/why-us-3.png",
  },
];

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const page = async (props: PageProps) => {
  const { id } = await props.params;

  // Fetch product data on the server
  let product: ProductType | null = null;
  let error: string | null = null;

  try {
    const productData = await fetch(`https://dummyjson.com/products/${id}`);
    if (productData.ok) {
      product = await productData.json();
    } else {
      error = "Product not found";
    }
  } catch (err) {
    error = "Failed to fetch product";
    console.error("Error fetching product:", err);
  }

  if (error || !product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <ProductDetailClient
      product={product}
      whyShopFromBlinkit={whyShopFromBlinkit}
    />
  );
};

export default page;
