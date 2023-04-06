import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useContentAsset from "../../hooks/useContentAsset";

const Order = () => {
  const { orderId } = useParams();
  const [assetBody, setAssetBody] = useState("");
  const { contentAsset } = useContentAsset("ocapi-thank-you-order");

  useEffect(() => {
    if (contentAsset) {
      const body = contentAsset.replace("${order ID}", orderId);
      setAssetBody(body);
    }
  }, [contentAsset, orderId]);

  return (
    <main className="main-order">
      <section className="order-section container mt-5">
        <h1 className="order-heading text-center">{assetBody}</h1>
      </section>
    </main>
  );
};

export default Order;
