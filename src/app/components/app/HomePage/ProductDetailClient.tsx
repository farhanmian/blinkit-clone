"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ProductType } from "../../../../../store/types/type";
import {
  IconArrowRight,
  IconCaretDown,
  IconMinus,
  IconPlus,
  IconStopwatch,
} from "@tabler/icons-react";
import { handleCartUpdate } from "../../../../../utils/utils";

type ProductDetailClientProps = {
  product: ProductType;
  whyShopFromBlinkit: Array<{
    title: string;
    description: string;
    img: string;
  }>;
};

const ProductDetailClient = ({
  product,
  whyShopFromBlinkit,
}: ProductDetailClientProps) => {
  const [isAdded, setIsAdded] = useState(0);

  const handleAdd = () => {
    setIsAdded(isAdded + 1);
    handleCartUpdate(product);
  };

  const handleRemove = () => {
    setIsAdded(isAdded - 1);
    handleCartUpdate(product);
  };

  return (
    <>
      {/* product detail */}
      <section className="">
        <div className="container mx-auto flex border-l border-[#eee]">
          {/* image section  (left side)*/}
          <div className="w-1/2 pt-16 pr-16">
            <Image
              src={product.images[0]}
              alt={product.title}
              width={590}
              height={480}
              className="w-full h-auto border border-[#e8e8e8]"
            />

            <div className="flex items-center gap-2 pt-2.5 px-[60px] mb-12 ">
              {product.images.map((image, i) => (
                <Image
                  key={i}
                  src={image}
                  alt={product.title}
                  width={64}
                  height={64}
                  className="border border-[#e8e8e8] rounded-lg"
                />
              ))}
            </div>

            {/* product details */}
            <div>
              <h4 className="text-[17px] font-extrabold mb-3">
                Product Details
              </h4>

              <div>
                <p className="text-sm font-medium mb-1">Brand</p>
                <p className="text-xs text-[#363636]">{product.brand}</p>
              </div>

              <button className="text-[13px] font-medium text-[var(--primary-color)] flex items-center gap-x-1">
                View more details{" "}
                <IconCaretDown
                  size={12}
                  fill="var(--primary-color)"
                  color="var(--primary-color)"
                />
              </button>
            </div>
          </div>

          {/* info section (right side) */}
          <div className="w-1/2 pl-12 pt-12 border-l border-[#eee] sticky top-[90px] h-max">
            <div className="pt-3 pl-3">
              <p className="text-xs font-medium text-[#4f4f4f] mb-3">
                Home / {product.category} / {product.title}
              </p>

              <h1 className="text-xl font-extrabold mb-2">{product.title}</h1>

              {/* delivery time */}
              <div className="flex items-center gap-x-0.5 mb-3 rounded-sm bg-[#fdf5e9] w-max px-1">
                <IconStopwatch size={12} color="#000" />
                <p className="text-[9px] font-bold">15min</p>
              </div>

              {/* explore all products  */}
              <div className="py-2 px-3 border-y border-[#d9d9d9] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={30}
                    height={30}
                  />
                  <div>
                    <h3 className="text-xs font-semibold">{product.brand}</h3>
                    <p className="text-[11px] text-[var(--primary-color)]">
                      Explore all products
                    </p>
                  </div>
                </div>

                <IconArrowRight size={12} color="#000" />
              </div>

              {/* pricing and cart */}
              <div className="py-3 flex items-center justify-between mb-12">
                <div className="flex flex-col gap-y-1.5">
                  <p className="text-[13px] font-semibold text-[#666]">
                    Min Order Qty: {product.minimumOrderQuantity}
                  </p>

                  {/* pricing and discount */}
                  <div className="flex items-center gap-1.5">
                    <p className="text-[15px] font-bold">
                      ₹
                      {(
                        product.price *
                        (1 - product.discountPercentage / 100)
                      ).toFixed(2)}
                    </p>
                    <p className="text-[13px] font-medium text-[#696969]">
                      MRP <span className="line-through">₹{product.price}</span>
                    </p>
                    <p className="text-[9px] font-bold text-white p-1 rounded bg-[#538cee]">
                      {product.discountPercentage}% OFF
                    </p>
                  </div>

                  <p className="text-[9px] font-medium text-[#4f4f4f]">
                    (Inclusive of all taxes)
                  </p>
                </div>

                {/* card button */}
                <div
                  onClick={() => {
                    if (isAdded === 0) {
                      handleAdd();
                    }
                  }}
                  className={`min-w-[120px] h-[45px] bg-[var(--primary-color)] rounded-md text-white text-[13px] font-semibold flex items-center px-1 gap-0.5 ${
                    isAdded === 0
                      ? "justify-center cursor-pointer"
                      : "justify-between"
                  }`}
                >
                  {isAdded === 0 ? (
                    "Add"
                  ) : (
                    <>
                      <IconMinus
                        size={16}
                        color="#fff"
                        onClick={handleRemove}
                        className="cursor-pointer"
                      />
                      {isAdded}
                      <IconPlus
                        size={16}
                        color="#fff"
                        onClick={handleAdd}
                        className="cursor-pointer"
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Why shop from blinkit? */}
              <div>
                <h4 className="text-base font-semibold text-[#333]">
                  Why shop from blinkit?
                </h4>

                <div>
                  {whyShopFromBlinkit.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 py-4">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={56}
                        height={56}
                      />
                      <div className="text-xs">
                        <p className="">{item.title}</p>
                        <p className="text-[#666]">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailClient;
