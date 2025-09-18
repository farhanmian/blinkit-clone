"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  IconArrowDown,
  IconSearch,
  IconShoppingCart,
} from "@tabler/icons-react";

// const cartItems = [
//   {
//     id: 1,
//     image:
//       "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/1.webp",
//     title: "Huawei Matebook X Pro",
//     price: 100,
//     discountedPrice: 90,
//     quantity: 1,
//     minimumOrderQuantity: 1,
//   },
//   {
//     id: 2,
//     image:
//       "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/1.webp",
//     title: "Huawei Matebook X Pro",
//     price: 100,
//     discountedPrice: 90,
//     quantity: 1,
//     minimumOrderQuantity: 1,
//   },
// ];

const Nav = () => {
  // const [isAdded, setIsAdded] = useState<{ [key: number]: number }>({});

  // console.log("idAdded", isAdded);

  // const handleAdd = (id: number) => {
  //   if (isAdded[id]) {
  //     setIsAdded({ ...isAdded, [id]: isAdded[id] + 1 });
  //   } else {
  //     setIsAdded({ ...isAdded, [id]: 1 });
  //   }
  // };

  // const handleRemove = (id: number) => {
  //   if (isAdded[id]) {
  //     setIsAdded({ ...isAdded, [id]: isAdded[id] - 1 });
  //   } else {
  //     setIsAdded({ ...isAdded, [id]: 0 });
  //   }
  // };

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
      {/* <div className="w-full h-full absolute top-0 right-0 bg-black/50 z-20" />
      <div className="h-full absolute top-0 right-0 max-w-[400px] w-full bg-[#F5F7FD] z-30">
        <div className="flex items-center justify-between sticky top-0 bg-white p-[18px]">
          <h5 className="text-base font-bold">My Cart</h5>
          <button>
            <IconX size={20} color="#000" />
          </button>
        </div>

        <div className="p-3">
          <div className="flex items-center justify-between bg-[#DBE8FF] rounded-xl p-2.5 text-[#256fef]">
            <p className="text-[13px] font-semibold ">Your total saving</p>
            <p className="text-[13px] font-semibold ">₹100</p>
          </div>

          <div className="bg-white p-3 rounded-xl mt-3">
            <div className="flex items-center gap-x-4 mb-3">
              <Image
                src="/images/15-mins-filled.png"
                alt="delivery"
                width={48}
                height={48}
              />

              <div>
                <p className="text-[15px] font-bold mb-1">
                  Delivery in 11 minutes
                </p>
                <p className="text-xs text-[#666]">Shipment of 2 items </p>
              </div>
            </div>

            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-x-3 mb-[26px]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={70}
                    height={70}
                    className="border border-[#e8e8e8] rounded-lg"
                  />
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col gap-y-1">
                      <p className="text-xs text-[#1c1c1c]">{item.title}</p>
                      <p className="text-xs text-[#666]">
                        Min Order Qty: {item.minimumOrderQuantity}
                      </p>
                      <p className="text-xs font-semibold">₹{item.price}</p>
                    </div>

                    {isAdded[item.id] === 0 ? (
                      <button
                        onClick={() => handleAdd(item.id)}
                        className="w-[66px] h-8 rounded-md text-[#318616] bg-[#f7fff9] border border-[#318616] cursor-pointer"
                      >
                        Add
                      </button>
                    ) : (
                      <div className="w-[66px] h-8 bg-[var(--primary-color)] rounded-md text-white text-[13px] font-semibold flex items-center justify-between px-1 gap-0.5">
                        <IconMinus
                          size={16}
                          color="#fff"
                          onClick={() => handleRemove(item.id)}
                        />
                        {isAdded[item.id] || 1}
                        <IconPlus
                          size={16}
                          color="#fff"
                          onClick={() => handleAdd(item.id)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Nav;
