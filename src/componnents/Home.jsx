import React,{useEffect} from "react";
import "./Product.css";
import { ProductList } from "./ProductList";
import { TopNav } from "./TopNav";
import { getProducts } from "../service/products";
import { useDispatch } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  const allproduct = async () => {
    const products = await getProducts();
    dispatch({
      type: "ADD_PRODUCTS",
      data: products,
    });
  };

  useEffect(() => {
    allproduct();
  }, []);
  return (
    <div>
      <TopNav />
      <ProductList />
    </div>
  );
};
