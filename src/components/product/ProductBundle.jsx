import { useState } from "react";
import AddToCart from "./AddToCart";
import Product from "./Product";
import Quantity from "./Quantity";

const ProductBundle = ({ productBundles }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="mb-5 pb-5 align-items-center">
      {productBundles.bundled_products.map((product, key) => {
        return <Product product={product.product} isBundle={true} key={key} />;
      })}
      <div className="container">
        <Quantity quantity={quantity} setQuantity={setQuantity} />
        <AddToCart
          pid={productBundles.id}
          quantity={quantity}
          productOrderable={productBundles.inventory.orderable}
        />
      </div>
    </main>
  );
};

export default ProductBundle;
