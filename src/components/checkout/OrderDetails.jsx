import { useCartContext } from "../../contexts/CartContext";
import CartProducts from "../cart/CartProducts";

const OrderDetails = ({ setStageStep }) => {
  const { cart } = useCartContext();

  return (
    <>
      <h2>Payment Info</h2>
      <div className="container my-1 rounded text-white justify-content-center bg-dark py-4 px-5">
        <div>
          {cart && cart?.product_items?.length > 0 ? (
            <>
              <div className="container">
                <CartProducts cart={cart} />
                <div className="container p-3 my-2">
                  <h5>
                    Product Total: {cart.product_total} {cart.currency}
                  </h5>
                  <h5>
                    Shipping Cost: {cart.shipments[0].shipping_method?.price}{" "}
                    {cart.currency}
                  </h5>
                  <h5>
                    Tax: {cart.tax_total} {cart.currency}
                  </h5>
                  <h5>
                    Final Cost: {cart.order_total} {cart.currency}
                  </h5>
                </div>
              </div>
            </>
          ) : (
            <div className="row py-2">
              <p className="col-12 text-center pt-2">No Products in Basket</p>
            </div>
          )}
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-light"
            onClick={() => setStageStep((checkoutStep) => checkoutStep - 1)}
          >
            Back
          </button>
          <button
            className="btn btn-light"
            onClick={() => setStageStep((checkoutStep) => checkoutStep + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
