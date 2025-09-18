"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  IconArrowDown,
  IconShoppingCartDiscount,
  IconSearch,
  IconShoppingCart,
  IconX,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";

const cartItems = [
  {
    id: 1,
    image:
      "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/1.webp",
    title: "Huawei Matebook X Pro",
    price: 100,
    discountedPrice: 90,
    quantity: 1,
    minimumOrderQuantity: 1,
  },
  {
    id: 2,
    image:
      "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/1.webp",
    title: "Huawei Matebook X Pro",
    price: 100,
    discountedPrice: 90,
    quantity: 1,
    minimumOrderQuantity: 1,
  },
];

const Nav = () => {
  const [isAdded, setIsAdded] = useState<{ [key: number]: number }>({});

  console.log("idAdded", isAdded);

  const handleAdd = (id: number) => {
    if (isAdded[id]) {
      setIsAdded({ ...isAdded, [id]: isAdded[id] + 1 });
    } else {
      setIsAdded({ ...isAdded, [id]: 1 });
    }
  };

  const handleRemove = (id: number) => {
    if (isAdded[id]) {
      setIsAdded({ ...isAdded, [id]: isAdded[id] - 1 });
    } else {
      setIsAdded({ ...isAdded, [id]: 0 });
    }
  };

  return (
    <>
      <nav className="border-b border-[#eee] sticky top-0 bg-white z-10">
        <div className="flex items-center justify-between pr-8">
          {/* logo and address */}
          <div className="flex items-center min-w-max">
            <Link href="/" className="px-[22px]">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={134}
                height={30}
                className="w-full max-w-[134px]"
              />
            </Link>

            <div className="px-11 py-[22px] border-l border-[#f2f2f2]">
              <h5 className="text-lg font-semibold">Delivery in 16 minutes</h5>
              {/* address */}
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-500">
                  217, Fayyaz Garden Area, Saijni Nankar...
                </p>
                <IconArrowDown size={14} color="#000" />
              </div>
            </div>
          </div>

          {/* search bar */}
          <div className="px-2 border border-gray-300 bg-[#f8f8f8] rounded-xl flex items-center gap-3 flex-1">
            <IconSearch size={20} color="#000" />
            <input
              type="text"
              placeholder="Search for products"
              className="py-3 focus:outline-none"
            />
          </div>

          {/* login and card button */}
          <div className="flex items-center gap-2 min-w-max">
            <Link
              href="/login"
              className="text-lg cursor-pointer w-40 text-center"
            >
              Login
            </Link>

            <button className="flex items-center gap-2 bg-[#E5E5E5] cursor-not-allowed font-semibold text-white p-4 rounded-lg">
              <IconShoppingCart size={24} color="#fff" />
              My Cart
            </button>
          </div>
        </div>
      </nav>

      {/* cart */}
    </>
  );
};

export default Nav;
