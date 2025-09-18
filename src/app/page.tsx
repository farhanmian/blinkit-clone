import Image from "next/image";
import { ProductTypeList } from "../../store/types/type";
import ProductCard from "./components/app/HomePage/ProductCard/ProductCard";
import ProductSlider from "./components/app/HomePage/ProductSlider/ProductSlider";

export default async function Home() {
  const productsData = await fetch("https://dummyjson.com/products");
  const products: { products: ProductTypeList } = await productsData.json();
  const categoryWiseProducts: { [key: string]: ProductTypeList } = {};

  console.log(products);

  products.products &&
    products.products?.forEach((item) => {
      const category = item.category;
      if (categoryWiseProducts[item.category]) {
        categoryWiseProducts[item.category].push(item);
      } else {
        categoryWiseProducts[item.category] = [item];
      }
    });

  console.log("categoryWiseProducts", categoryWiseProducts);

  return (
    <main className="pt-4 mt-10">
      {/* product list */}
      <section className="container mx-auto">
        {Object.keys(categoryWiseProducts).map((categoryName, i) => {
          return (
            <div key={i} className="mb-9">
              <h3 className="text-2xl mb-4 ml-2 font-semibold capitalize">
                {categoryName.split("-").join(" ")}
              </h3>

              <div>
                <ProductSlider
                  categoryWiseProducts={categoryWiseProducts}
                  categoryName={categoryName}
                />
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
