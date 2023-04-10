import { Link } from "react-router-dom";

import {
  addBillingAddress,
  addShippingAddress,
} from "../../services/checkout-service";
import { useCartContext } from "../../contexts/CartContext";
import { createAddressObject } from "../../utils/createDataObject";

const AddressForm = ({
  setStageStep,
  shippingInfo,
  setShippingInfo,
  basketId,
  isShippingAddress,
}) => {
  const { setCart } = useCartContext();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    let newCart;
    if (isShippingAddress) {
      if (basketId) {
        const requestData = createAddressObject(shippingInfo);
        newCart = await addShippingAddress(basketId, requestData);
      }
    } else {
      const billingAddressData = createAddressObject(shippingInfo);
      newCart = await addBillingAddress(basketId, billingAddressData);
    }

    setCart(newCart);
    setStageStep((checkoutStep) => checkoutStep + 1);
  };

  const onHandleChange = (ev) => {
    setShippingInfo({ ...shippingInfo, [ev.target.name]: ev.target.value });
  };

  return (
    <>
      <h2>{isShippingAddress ? "Shipping address" : "Billing address"}</h2>
      <div className="container bg-dark rounded text-white my-1 py-4 px-5">
        <form
          className="row d-flex justify-content-center"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="firstName"
            className="col-5 col-xl-2 text-center my-2 py-1"
          ></label>
          <input
            type="text"
            name="firstName"
            title="First Name"
            placeholder="First Name"
            value={shippingInfo.firstName}
            onChange={onHandleChange}
            required
          />

          <label
            htmlFor="lastName"
            className="col-5 col-xl-2 text-center my-2 py-1"
          ></label>
          <input
            type="text"
            name="lastName"
            title="Last Name"
            placeholder="Last Name"
            value={shippingInfo.lastName}
            onChange={onHandleChange}
            required
          />

          <label
            htmlFor="phone"
            className="col-5 col-xl-2 text-center my-2 py-1"
          ></label>
          <input
            type="text"
            name="phone"
            title="Phone"
            placeholder="Phone"
            value={shippingInfo.phone}
            onChange={onHandleChange}
            required
          />

          <label
            htmlFor="countryCode"
            className="col-5 col-xl-2 text-center my-2 py-1"
          ></label>
          <input
            type="text"
            name="countryCode"
            title="Country Code"
            placeholder="Country Code"
            value={shippingInfo.countryCode}
            onChange={onHandleChange}
            required
          />

          <label
            htmlFor="city"
            className="col-5 col-xl-2 text-center my-2 py-1"
          ></label>
          <input
            type="text"
            name="city"
            title="City"
            placeholder="City"
            value={shippingInfo.city}
            onChange={onHandleChange}
            required
          />

          <label
            htmlFor="address"
            className="col-5 col-xl-2 text-center my-2 py-1"
          ></label>
          <input
            type="text"
            name="address"
            title="Address"
            placeholder="Address"
            value={shippingInfo.address}
            onChange={onHandleChange}
            required
          />
          <div className="col-12 d-flex justify-content-center">
            <button className="btn btn-light px-4 my-0 mt-2 mb-1" type="submit">
              {isShippingAddress
                ? "Add shipping address"
                : "Add billing address"}
            </button>
          </div>
        </form>
        {isShippingAddress ? (
          <Link className="btn btn-light me-2" to="/cart">
            Back
          </Link>
        ) : (
          <button
            className="btn btn-light me-2"
            onClick={() => setStageStep((checkoutStep) => checkoutStep - 1)}
          >
            Back
          </button>
        )}
      </div>
    </>
  );
};

export default AddressForm;
