"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ProductType } from "../../../../../../store/types/type";
import { IconMinus, IconPlus, IconStopwatch } from "@tabler/icons-react";
import Link from "next/link";
import { handleCartUpdate } from "../../../../../../utils/utils";

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
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
    // <Link href={`/product-detail/${product.id}`}>
    <div
      className="pb-3 flex flex-col gap-y-0.5 border border-[#e8e8e8] cursor-pointer rounded-lg h-full min-w-[180px] min-h-[287px] mb-2"
      style={{ boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px" }}
    >
      <Link href={`/product-detail/${product.id}`}>
        <Image
          className="mx-auto"
          src={product.thumbnail}
          alt={product.title}
          width={140}
          height={140}
        />
      </Link>

      <div className="px-3 flex flex-col justify-between h-full flex-1">
        <Link href={`/product-detail/${product.id}`}>
          <div>
            <div className="flex items-center gap-x-0.5 mb-1 rounded-sm bg-[#efefef] w-max px-1">
              <IconStopwatch size={12} color="#000" />
              <p className="text-[9px] font-bold">15min</p>
            </div>

            <h3 className="font-semibold text-[13px] mb-3">{product.title}</h3>
            <p className="text-xs text-[#666] mb-[14px]">
              Min Order Qty: {product.minimumOrderQuantity}
            </p>
          </div>
        </Link>

        <div className="flex items-center justify-between mt-auto">
          <p className="font-semibold text-xs ">
            ₹
            {(product.price * (1 - product.discountPercentage / 100)).toFixed(
              2
            )}
          </p>
          {isAdded === 0 ? (
            <button
              onClick={handleAdd}
              className="w-[66px] h-8 rounded-md text-[#318616] bg-[#f7fff9] border border-[#318616] cursor-pointer"
            >
              Add
            </button>
          ) : (
            <div className="w-[66px] h-8 bg-[var(--primary-color)] rounded-md text-white text-[13px] font-semibold flex items-center justify-between px-1 gap-0.5">
              <IconMinus size={16} color="#fff" onClick={handleRemove} />
              {isAdded}
              <IconPlus size={16} color="#fff" onClick={handleAdd} />
            </div>
          )}
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default ProductCard;
