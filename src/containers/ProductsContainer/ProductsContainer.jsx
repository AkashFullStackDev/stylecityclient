import { useState, useEffect, useMemo } from "react";
import Card from "../../components/card/Card";
import "./productContainer.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/productsSlice";

const ProductsContainer = () => {

  const [page, setPage] = useState(1);
  const [name, setName] = useState({});
  const [limit, setLimit] = useState(10);
  const [category, setCategory] = useState("all");
  const [subCategory, setSubCategory] = useState("all");

  const dispatch = useDispatch();
  const products = useSelector(state=>state.products)

  const API = `http://localhost:8080/api/products?name=${name}&category=${category}&subCategory=${subCategory}&page=${page}&limit=${limit}`;

  useEffect(()=>{
    window.addEventListener("scroll", handleInfiniteScroll);
    return ()=>window.removeEventListener("scroll", handleInfiniteScroll);
  },[])

  useEffect(()=>{
    dispatch(fetchProducts(API));
  },[page])

  const handleInfiniteScroll = () => {
    if(window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight){
      setPage(prev=>prev+1);
    }
  }
  

  return (
    <section className="product-container">
      {products.isLoading?"Loading...":null}
      {products.data.length>0?products.data.map((item=><Card item={item} key={item._id}/>)):null}
    </section>
  );
};

export default ProductsContainer;
