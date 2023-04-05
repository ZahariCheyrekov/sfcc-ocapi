const Quantity = ({ quantity, setQuantity }) => {
  const increaseQuantity = (isIncrease) => {
    if (isIncrease && quantity < 10) {
      setQuantity((quantity) => quantity + 1);
    } else if (!isIncrease && quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };

  return (
    <>
      <h4 className="quantity-heeading">Quantity:</h4>
      <section className="quantity-actions mb-4">
        <button
          onClick={() => increaseQuantity(false)}
          className="quantity-button-decrease btn btn-dark"
        >
          -
        </button>
        <span className="quantity-amount mx-3">{quantity}</span>
        <button
          onClick={() => increaseQuantity(true)}
          className="quantity-button-increase btn btn-dark"
        >
          +
        </button>
      </section>
    </>
  );
};

export default Quantity;
