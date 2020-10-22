import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import FlippingCard from "./FlippingCard";

function Final() {
  const state: any = useSelector((state) => state);

  const tableRow = (playerName: any, playerScore: any, position: any) => (
    <tr>
      <td>{position}</td>
      <td>{playerName}</td>
      <td>{playerScore}</td>
    </tr>
  );

  return (
    <div>
      <FlippingCard index={0}></FlippingCard>
    </div>
  );
}

export default Final;
