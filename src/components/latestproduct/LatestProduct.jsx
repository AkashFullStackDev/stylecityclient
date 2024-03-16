import "./latestproduct.css";
import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";
import { fetchLatestProducts } from "../../store/slices/latestProductsSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LatestProduct = () => {
  const dispatch = useDispatch();
  const API = "http://localhost:8080/api/latestproducts";

  useEffect(()=>{
    dispatch(fetchLatestProducts(API));
  },[])
  const latestProducts = useSelector(state=>state.latestProducts.data)
  const redirectToProductPage = () => {
    navigate("/products");
  }

  return (
    <div className="latest-products-container">
      <div className="heading-container">
        <h1 className="heading">Latest Product</h1>
      </div>
      <div className="card-container">
          {latestProducts.map(item=><Card item={item}/>)}
      </div>
      <div><Link to="/product">View all products</Link></div>
    </div>
  );
};

export default LatestProduct;
