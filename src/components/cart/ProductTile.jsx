import { Link } from "react-router-dom";

import { useCartContext } from "../../contexts/CartContext";
import { removeProductFromCart } from "../../services/cart-service";

const ProductTile = ({ item, currency }) => {
  const { cart, setCart } = useCartContext();

  const removeProduct = async (productId) => {
    const newCart = await removeProductFromCart(cart.basket_id, productId);
    setCart(newCart);
  };

  return (
    <ul className="row align-items-xl-center">
      <li className="col-4">
        <h4 className="product-heading-main">Product:</h4>
        {item.product_name}
      </li>
      <li className="col-4">
        <h4 className="product-heading-quantity">Quantity:</h4>
        {item.quantity}
      </li>
      <li className="col-4">
        <h4 className="product-heading-price">Price:</h4>
        {item.price.toFixed(2)} {currency}
      </li>
      <li className="d-flex justify-content-between col-12">
        <Link className="btn btn-light" to={`/${item.product_id}`}>
          Details
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => removeProduct(item.item_id)}
        >
          Remove
        </button>
      </li>
    </ul>
  );
};

export default ProductTile;
