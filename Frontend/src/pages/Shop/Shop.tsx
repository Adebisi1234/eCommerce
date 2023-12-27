import Deals from "@/components/Deals";
import { Header } from "../../components/Header";
import ProductCart from "../../components/ProductCard";
import Sidebar from "../../components/Sidebar";

export const Shop = () => {
  return (
    <>
      <Header />
      <div className="mid:grid mid:grid-cols-[240px_1fr] h-[calc(100vh_-_80px)]">
        <Sidebar />
        <main>
          <Deals />
          <h1 className="text-2xl font-bold tracking-tight mb-2">
            All Products
          </h1>
          <div className="product-container sm:border-l-2 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </main>
      </div>
    </>
  );
};
