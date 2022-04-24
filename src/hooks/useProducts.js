import { useEffect, useState } from "react"

const useProducts = () => {
  const [products,setProducts]=useState([])
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((rse) => rse.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
}

export default useProducts;