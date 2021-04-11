import React, { useContext } from "react";
import CompC from "./CompC";
import { LastName } from "./App";

export default function CompB() {
  const lname = useContext(LastName);

  return (
    <>
      <CompC />
      <h1>Hi {lname}</h1>
    </>
  );
}
