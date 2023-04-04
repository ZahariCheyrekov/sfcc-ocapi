import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getProduct } from "../../services/product-service";

import Carousel from "react-bootstrap/Carousel";
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
  }, [pid]);

  return (
    product && (
      <main>
        <div className="container pt-4">
          <div className="row">
            <div className="col-12 col-md-4">
              <Carousel>
                {product.image_groups[0].images.map((image, key) => (
                  <Carousel.Item className={`carousel-item `} key={key}>
                    <img
                      src={image.link}
                      alt={image.title}
                      loading="lazy"
                      className="d-block w-100"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="col-12 col-md-8">
              <div className="row">
                <h1>{product.name}</h1>
                <h3>{pid}</h3>
                <h4>
                  {product.price} {product.currency}
                </h4>
                <p>{product.page_description}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  );
};

export default ProductDetails;
