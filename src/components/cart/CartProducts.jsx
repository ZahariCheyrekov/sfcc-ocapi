import ProductTile from "./ProductTile";

const CartProducts = ({ cart }) => {
  return (
    <>
      <article className="cart-product-item cart-product">
        {cart.product_items?.map((item, key) => (
          <ProductTile item={item} key={key} currency={cart.currency} />
        ))}
      </article>
      <div className="row justify-content-end border-top border-bottom mb-3">
        <h4 className="col-4 py-2 border-light">Product Total:</h4>
        <h4 className="border-light py-2 col-4 ">
          {cart.product_total.toFixed(2)} {cart.currency}
        </h4>
      </div>
    </>
  );
};

export default CartProducts;
