import React from "react";
import { commentry } from "../API /api";

const Commentry = ({ event }) => {
  return (
    <div>
      {commentry.map((item) => {
        return <div>{item.One}</div>;
      })}
    </div>
  );
};

export default Commentry;
