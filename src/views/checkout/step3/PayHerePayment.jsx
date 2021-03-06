import React, { Component } from "react";

import { PayHereButton } from "react-payhere-button";

const PayHerePayment = () => {
  const onSucess = () => console.log("onSuccess", orderId);
  const onDismissed = () => console.log("onDismissed");
  const onError = () => console.log("onError", error);

  return (
    <PayHereButton
      style={{
        padding: 16,
        borderRadius: 0,
        elevation: 0,
        backgroundColor: "blue",
        color: "white",
        borderWidth: 0,
        fontWeight: "bold",
      }}
      sandbox={true}
      merchant_id={"1214560"}
      onCompleted={onSucess}
      onDismissed={onDismissed}
      onError={onError}
      order_id={"ItemNo12345"}
      items={"Door bell wireles"}
      amount={100}
      currency={"LKR"}
      first_name={"Prahveen"}
      last_name={"Thiruchelvam"}
      email={"prahveent@gmail.com"}
      phone={"0771234567"}
      address={"No.1, Galle Road"}
      city={"Colombo"}
      country={"Sri Lanka"}
      options={{
        delivery_address: "No. 123, Galle road, Colombo 03",
        delivery_city: "Kollupitiya",
        delivery_country: "Sri Lanka",
        custom_1: "",
        custom_2: "",
        return_url: "http://sample.com/return",
        cancel_url: "http://sample.com/cancel",
        notify_url: "http://sample.com/notify",
      }}
    />
  );
};

export default PayHerePayment;
