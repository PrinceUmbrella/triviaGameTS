import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import FlippingCard from "./FlippingCard";

function Final() {
  return (
    <div>
      <FlippingCard index={0}></FlippingCard>
      <br></br>
      <FlippingCard index={1}></FlippingCard>
    </div>
  );
}

export default Final;
