import { useCartContext } from "../../contexts/CartContext";
import { addProductToCart, createCart } from "../../services/cart-service";

const AddToCart = ({ productOrderable, pid, quantity }) => {
  const { cart, setCart } = useCartContext();

  const addToCart = async () => {
    let checkCart;

    if (!cart) {
      checkCart = await createCart();
    }

    const basketId = cart ? cart.basket_id : checkCart.basket_id;
    const productData = [
      {
        product_id: pid,
        quantity: quantity,
      },
    ];

    const newCart = await addProductToCart(basketId, productData);
    setCart(newCart);
  };

  return productOrderable ? (
    <button
      className="product-add-to-cart add-to-cart-button btn btn-dark"
      onClick={addToCart}
    >
      Add to Cart
    </button>
  ) : (
    <h5 className="not-available-text text-danger">
      Product is currently not available.
    </h5>
  );
};

export default AddToCart;
