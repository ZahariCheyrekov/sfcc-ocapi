import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getProduct } from "../../services/product-service";

import Product from "../../components/product/Product";
import ProductBundle from "../../components/product/ProductBundle";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { pid } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(pid);

      if (product.fault) {
        navigate("/not-found");
      } else {
        setProduct(product);
      }
    };
    fetchProduct();
  }, [pid, navigate]);

  return (
    product &&
    (product?.type.bundle ? (
      <ProductBundle productBundles={product} />
    ) : (
      <Product product={product} isBundle={false} />
    ))
  );
};

export default ProductDetails;
