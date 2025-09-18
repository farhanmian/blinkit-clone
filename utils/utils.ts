import { CartType, ProductType } from "../store/types/type";

export const handleCartUpdate = (product: ProductType) => {
  const cart = localStorage.getItem("cart"); // [{id: 1, quantity: 1, price: 100, image: xyz, title: xyz, minimumOrderQuantity: 1}]

  if (cart) {
    // cart exists
    const cartItems = JSON.parse(cart);
    if (cartItems.find((item: CartType) => item.id === product.id)) {
      // item exists
      cartItems.find((item: CartType) => item.id === product.id).quantity += 1;
    } else {
      // item does not exist
      cartItems.push({
        id: product.id,
        quantity: 1,
        price: product.price,
        image: product.images[0],
        title: product.title,
        minimumOrderQuantity: product.minimumOrderQuantity,
      });
    }
    console.log("cartItems", cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  } else {
    // cart does not exist
    localStorage.setItem(
      "cart",
      JSON.stringify([
        {
          id: product.id,
          quantity: 1,
          price: product.price,
          image: product.images[0],
          title: product.title,
          minimumOrderQuantity: product.minimumOrderQuantity,
        },
      ])
    );
  }
};
