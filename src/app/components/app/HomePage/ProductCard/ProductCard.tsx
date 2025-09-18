import Image from "next/image";
import React from "react";
import { ProductType } from "../../../../../../store/types/type";
import { IconClock, IconStopwatch } from "@tabler/icons-react";

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <div
      className="pb-3 flex flex-col gap-y-0.5 border border-[#e8e8e8] rounded-lg"
      style={{ boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px" }}
    >
      <Image
        src={product.images[0]}
        alt={product.title}
        width={140}
        height={140}
      />

      <div className="px-3">
        <div className="flex items-center gap-x-0.5 mb-1 rounded-sm bg-[#f8f8f8] ">
          <IconStopwatch size={12} color="#000" />
          <p className="text-[9px] font-bold">15min</p>
        </div>

        <h3 className="font-semibold text-[13px] mb-3">{product.title}</h3>
        <p className="text-xs text-[#666] mb-[14px]">
          Min Order Qty: {product.minimumOrderQuantity}
        </p>

        <div className="flex items-center justify-between">
          <p className="font-semibold text-xs ">₹{product.price}</p>
          <button className="w-[66px] h-8 rounded-md text-[#318616] bg-[#f7fff9] border border-[#318616]">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
