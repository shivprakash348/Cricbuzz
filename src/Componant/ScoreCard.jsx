import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React from "react";
import teamIndia from "../india.jpeg";

const ScoreCard = ({ scoreCard, wicket }) => {
  return (
    <div className="text-2xl mx-8 my-4 flex justify-around">
      <div className="flex">
        <span className="p-1">
          <img
            src={teamIndia}
            alt={"Team India"}
            style={{ width: 30, height: 20 }}
          />
        </span>
        India
      </div>{" "}
      <div>
        {scoreCard}/{wicket}
      </div>
    </div>
  );
};

export default ScoreCard;
