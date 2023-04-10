const Attributes = ({
  attributes,
  selectedAttributes,
  setSelectedAttributes,
  variants,
  setProductId,
}) => {
  const selectAttribute = async (attribute, value) => {
    setSelectedAttributes({ ...selectedAttributes, [attribute]: value });

    if (attribute === "color") {
      const productId = variants.filter((variant) => {
        return variant.variation_values[attribute] === value;
      })[0].product_id;

      setProductId(productId);
    }
  };
  return (
    <>
      {attributes?.map((attribute, key) => (
        <div key={key}>
          <h5>{attribute.name}:</h5>
          {attribute.values?.map((attr, key) =>
            attr.orderable ? (
              <button
                key={key}
                disabled={selectedAttributes[attribute.id] === attr.value}
                className={`btn m-3 ${
                  selectedAttributes[attribute.id] === attr.value
                    ? "btn-warning"
                    : "btn-dark"
                }`}
                onClick={() => selectAttribute(attribute.id, attr.value)}
              >
                {attr.name}
              </button>
            ) : (
              <></>
            )
          )}
        </div>
      ))}
    </>
  );
};

export default Attributes;
