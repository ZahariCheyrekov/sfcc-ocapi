export const createAddressObject = (shippingAddressData) => {
    return {
        first_name: shippingAddressData.firstName,
        last_name: shippingAddressData.lastName,
        phone: shippingAddressData.phone,
        address1: shippingAddressData.address,
        city: shippingAddressData.city,
        country_code: shippingAddressData.countryCode
    }
}

export const createPaymentObject = (amount, cardData) => {
    const object = {
        amount: amount,
        payment_card: {
            number: cardData.cardNumber,
            security_code: cardData.securityCode,
            holder: `${cardData.firstName} ${cardData.lastName}`,
            card_type: cardData.cardType,
            expiration_month: Number(cardData.expirationMonth),
            expiration_year: Number(cardData.expirationYear)
        },
        payment_method_id: "CREDIT_CARD"
    }

    return object;
}