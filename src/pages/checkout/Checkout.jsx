import React, { useState } from "react";

import { useCartContext } from "../../contexts/CartContext";

import AddressForm from "../../components/checkout/AddressForm";
import ShippingMethod from "../../components/checkout/ShippingMethod";
import OrderDetails from "../../components/checkout/OrderDetails";
import CardInformation from "../../components/checkout/CardInformation";

const Checkout = () => {
  const { cart } = useCartContext();
  const [stageStep, setStageStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    countryCode: "",
    shippingMethod: "",
  });

  const [checkoutStages] = useState([
    <AddressForm isShippingAddress={true} />,
    <ShippingMethod />,
    <AddressForm isShippingAddress={false} />,
    <OrderDetails />,
    <CardInformation />,
  ]);

  return (
    <main className="checkout-main">
      <div className="container">
        <h1 className="checkout-heading-title">Checkout - {stageStep}/5</h1>
        <section className="checkout-section-content">
          {React.cloneElement(checkoutStages[stageStep - 1], {
            setStageStep: setStageStep,
            shippingInfo: shippingInfo,
            setShippingInfo: setShippingInfo,
            basketId: cart?.basket_id,
          })}
        </section>
      </div>
    </main>
  );
};

export default Checkout;
