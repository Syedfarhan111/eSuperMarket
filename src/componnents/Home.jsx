import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ProductList } from "./ProductList";
import { getProducts } from "../service/products";
import { TopNav } from "./TopNav";
import "./Product.css";

export const Home = () => {
  const dispatch = useDispatch();
  const allProducts = async () => {
    const products = await getProducts();
    dispatch({
      type: "ADD_PRODUCT",
      data: products,
    });
  };

  useEffect(() => {
    allProducts();
  }, []);
  return (
    <div>
      <TopNav />
      <ProductList />
    </div>
  );
};