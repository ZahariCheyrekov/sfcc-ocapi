import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ProductCarousel from "./Carousel";
import Attributes from "./Attributes";
import Quantity from "./Quantity";
import AddToCart from "./AddToCart";

const Product = ({ product, isBundle }) => {
  const navigate = useNavigate();
  const { pid } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [attributes, setAttributes] = useState(null);
  const [variants, setVariants] = useState(null);
  const [selectedAttributes, setSelectedAttributes] = useState(null);

  useEffect(() => {
    if (product.fault) {
      navigate("/not-found");
    } else {
      setAttributes(product.variation_attributes);
      setVariants(product.variants);

      if (!isBundle) {
        setSelectedAttributes(
          product.variation_attributes
            .map((attribute) => attribute.id)
            .reduce((key, value) => {
              return { ...key, [value]: "" };
            }, {})
        );
      }
    }
  }, [
    isBundle,
    navigate,
    product.fault,
    product.variants,
    product.variation_attributes,
  ]);

  const changeProductId = (pid) => {
    navigate(`/${pid}`);
  };

  return (
    <div className="container mt-5">
      <section className="product-section row">
        <article className="product-article-col product-carousel col-12 col-md-4">
          <ProductCarousel images={product.image_groups[0].images} />
        </article>
        <article className="product-article-content col-12 col-md-8">
          <div className="product-wrapper-content row">
            <h1 className="product-heading-name">{product.name}</h1>
            <h3 className="product-heading-id">{pid}</h3>
            <h4 className="product-heading-price">
              {product.price} {product.currency}
            </h4>
            <p className="product-paragraph-description page-description">
              {product.page_description}
            </p>
          </div>

          <Attributes
            variants={variants}
            setProductId={changeProductId}
            attributes={attributes}
            setSelectedAttributes={setSelectedAttributes}
            selectedAttributes={selectedAttributes}
          />

          {!isBundle && (
            <>
              <Quantity quantity={quantity} setQuantity={setQuantity} />

              <AddToCart
                pid={pid}
                quantity={quantity}
                productOrderable={product.inventory.orderable}
              />
            </>
          )}
        </article>
      </section>
    </div>
  );
};

export default Product;
