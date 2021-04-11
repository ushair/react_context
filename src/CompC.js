import React, { useContext } from "react";
import { FirstName, LastName } from "./App";
export default function CompC() {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <>
      <h1>
        my name is {fname} {lname}
      </h1>
    </>
  );
}
