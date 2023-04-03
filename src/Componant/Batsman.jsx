import React from "react";

const Batsman = ({ player, score, ball, four, six }) => {
  return (
    <>
      <div className="border border-blue-300 text-lg mx-8 my-5 p-2">
        <table className="w-full">
          <tr>
            <th>Batter</th>
            <th>Run</th>
            <th>Ball</th>
            <th>4's</th>
            <th>6's</th>
            <th>S/R</th>
          </tr>
          <tr>
            <th>{player} : </th>
            <th>{score}</th>
            <th>{ball}</th>
            <th>{four}</th>
            <th>{six}</th>
            <th>S/R</th>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Batsman;
