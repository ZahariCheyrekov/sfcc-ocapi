import { useEffect, useState } from "react";

import {
  addShippingMethod,
  getShippingMethods,
} from "../../services/checkout-service";
import { useCartContext } from "../../contexts/CartContext";

const ShippingMethod = ({
  setStageStep,
  shippingInfo,
  setShippingInfo,
  basketId,
}) => {
  const { setCart } = useCartContext();
  const [shippingMethods, setShippingMethods] = useState();

  useEffect(() => {
    const fetchMethods = async () => {
      const methods = await getShippingMethods(basketId);
      setShippingMethods(methods.applicable_shipping_methods);
    };
    fetchMethods();
  }, [basketId]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    let newCart;
    if (shippingInfo.shippingMethod === "") {
      newCart = await addShippingMethod(
        basketId,
        shippingMethods[0].id || "001"
      );
    }

    newCart = await addShippingMethod(basketId, shippingInfo.shippingMethod);
    setCart(newCart);

    setStageStep((checkoutStep) => checkoutStep + 1);
  };

  const onHandleChange = (ev) => {
    setShippingInfo({ ...shippingInfo, [ev.target.name]: ev.target.value });
  };

  return (
    <>
      <h2>Shipping Method</h2>
      <div className="container bg-dark py-4 text-white rounded">
        <form
          className="row d-flex justify-content-center"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="shippingMethod"
            className="col-7 text-center my-1 py-0"
          >
            *ShippingMethod:
          </label>
          <select
            className="col-7 my-2 py-2 text-center mx-0"
            onChange={onHandleChange}
            name="shippingMethod"
            required
          >
            {shippingMethods ? (
              shippingMethods.map((method, key) => (
                <option value={method.id} key={key}>
                  {method.name} - {method.price} USD
                </option>
              ))
            ) : (
              <option value="error">Noo shipping methods</option>
            )}
          </select>

          <div className="col-12 d-flex justify-content-center">
            <button className="btn px-4 my-0 mt-2 btn-light mb-1" type="submit">
              Add shipping method
            </button>
          </div>
        </form>
        <button
          className="btn btn-light"
          type="button"
          onClick={() => setStageStep((checkoutStep) => checkoutStep - 1)}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default ShippingMethod;
