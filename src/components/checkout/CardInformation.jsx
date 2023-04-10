import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  addPayment,
  createOrder,
  getPaymentMethods,
} from "../../services/checkout-service";
import { useCartContext } from "../../contexts/CartContext";
import { createPaymentObject } from "../../utils/createDataObject";

const CardInformation = ({ setStageStep }) => {
  const navigate = useNavigate();
  const { cart, setCart, setCartItemsCount } = useCartContext();
  const [paymentMethods, setPaymentMethods] = useState();
  const [cardInfo, setCardInfo] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    securityCode: "",
    cardType: paymentMethods ? paymentMethods[0]?.card_type : "Visa",
    expirationMonth: "",
    expirationYear: "",
  });

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const methods = await getPaymentMethods(cart.basket_id);
      setPaymentMethods(methods);
    };
    fetchPaymentMethods();
  }, [cart.basket_id]);

  const onHandleChange = (ev) => {
    setCardInfo({ ...cardInfo, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const paymnetObject = createPaymentObject(cart?.order_total, cardInfo);
    const payment = await addPayment(cart.basket_id, paymnetObject);
    setCart(payment);

    if (payment) {
      const order = await createOrder({ basket_id: cart.basket_id });

      setCart(null);
      setCartItemsCount(0);

      navigate(`/order/${order.order_no}`);
    }
  };

  return (
    <>
      <h2>Payment Info</h2>
      <div className="container rounded my-4 py-4 px-5 bg-dark text-white ">
        <form
          className="row d-flex justify-content-center"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="cardNumber"
            className="col-5 my-2 text-center py-1"
          ></label>
          <input
            type="number"
            name="cardNumber"
            title="Card Number"
            placeholder="Card Number"
            value={cardInfo.cardNumber}
            onChange={onHandleChange}
            required
          />

          <label
            htmlFor="securityCode"
            className="col-5 my-2 py-1 text-center"
          ></label>
          <input
            type="number"
            name="securityCode"
            title="Security Code"
            placeholder="Security Code"
            value={cardInfo.securityCode}
            onChange={onHandleChange}
            min={3}
            required
          />

          <label
            htmlFor="expirationMonth"
            className="col-5 my-2 py-1 text-center"
          ></label>
          <input
            type="number"
            name="expirationMonth"
            title="Expiration Month"
            placeholder="Expiration Month"
            value={cardInfo.expirationMonth}
            onChange={onHandleChange}
            min={1}
            max={2}
            required
          />

          <label
            htmlFor="expirationYear"
            className="col-5 my-2 py-1 text-center"
          ></label>
          <input
            type="number"
            name="expirationYear"
            title="Expiration Year"
            placeholder="Expiration Year"
            value={cardInfo.expirationYear}
            onChange={onHandleChange}
            min={2023}
            required
          />

          <label
            htmlFor="firstName"
            className="col-5 my-2 py-1 text-center"
          ></label>
          <input
            type="text"
            name="firstName"
            title="First Name"
            placeholder="First Name"
            value={cardInfo.firstName}
            onChange={onHandleChange}
            required
          />

          <label
            htmlFor="lastName"
            className="col-5 my-2 py-1 text-center"
          ></label>
          <input
            type="text"
            name="lastName"
            title="Last Name"
            placeholder="Last Name"
            value={cardInfo.lastName}
            onChange={onHandleChange}
            required
          />

          <div className="d-flex row justify-content-center">
            <button
              className="col-6 btn btn-light align-items-center px-4 mt-2"
              type="submit"
            >
              Make Payment & Order
            </button>
          </div>
        </form>
        <button
          className="btn btn-light"
          onClick={() => setStageStep((checkoutStep) => checkoutStep - 1)}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default CardInformation;
