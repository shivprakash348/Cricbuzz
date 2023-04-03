import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Double,
  Four,
  Legbye,
  Noball,
  Out,
  Single,
  Six,
  Tripple,
  Wide,
} from "../action";
import Batsman from "../Componant/Batsman";
import Commentry from "../Componant/Commentry";
import ScoreCard from "../Componant/ScoreCard";

const Home = () => {
  const newState = useSelector((state) => state.CartItem);
  const wicket = useSelector((state) => state.Wicket);
  const dispatch = useDispatch();
  // console.log(Four(4).payload);
  // var arr = Array();
  // // var val;
  // const handleclick = () => {
  //   return arr.push(Four(4).payload);
  //   // console.log(arr);
  //   // val = arr.length;
  //   // console.log(val);
  //   // return arr;
  // };
  // console.log(handleclick());
  // const nam = handleclick();
  // console.log(val);

  const [countFour, setCountFour] = useState(0);
  const [countSix, setCountSix] = useState(0);
  const [countBall, setCountBall] = useState(0);
  const handleFour = () => {
    dispatch(Four(4));
    setCountFour(countFour + 1);
    setCountBall(countBall + 1);
  };
  const handleSix = () => {
    dispatch(Six(6));
    setCountSix(countSix + 1);
    setCountBall(countBall + 1);
  };
  var ball = [];
  const handleOne = () => {
    dispatch(Single(1));
    setCountBall(countBall + 1);
  };
  const handleTwo = () => {
    dispatch(Double(2));
    setCountBall(countBall + 1);
  };
  const handleThree = () => {
    dispatch(Tripple(3));
    setCountBall(countBall + 1);
  };
  const handleLegbye = () => {
    dispatch(Legbye(1));
    setCountBall(countBall + 1);
  };
  const handleOut = () => {
    dispatch(Out(1));
    setCountBall(countBall + 1);
  };

  return (
    <>
      {/* <button onClick={() => handleclick()}>click</button>{" "} */}
      <ScoreCard scoreCard={newState} wicket={wicket} />
      <Batsman
        player={"Rohit Sharma"}
        score={newState}
        four={countFour}
        six={countSix}
        ball={countBall}
      />
      <div className="flex justify-between mx-4">
        {" "}
        <div className="border boreder-gray-300 px-3 bg-slate-200 hover:bg-cyan-400 rounded-lg">
          <button onClick={handleOne}>1</button>
        </div>
        <div className="border boreder-gray-300 px-3 bg-slate-200 hover:bg-orange-300 rounded-lg">
          <button onClick={handleTwo}>2</button>
        </div>
        <div className="border boreder-gray-300 px-3 bg-slate-200 hover:bg-purple-400 rounded-lg">
          <button onClick={handleThree}>3</button>
        </div>
        <div className="border boreder-gray-300 px-3 bg-slate-200 hover:bg-green-400 rounded-lg">
          <button onClick={handleFour}>4</button>
        </div>
        <div className="border boreder-gray-300 px-3 bg-slate-200 hover:bg-blue-400 rounded-lg">
          <button onClick={handleSix}>6</button>
        </div>
        <div className="border boreder-gray-300 px-3 bg-slate-200 hover:bg-indigo-400 rounded-lg">
          <button onClick={() => dispatch(Wide(1))}>Wide ball</button>
        </div>
        <div className="border boreder-gray-300 px-3 bg-slate-200 hover:bg-red-300 rounded-lg">
          <button onClick={() => dispatch(Noball(1))}>No ball</button>
        </div>
        <div className="border boreder-gray-300 px-3 bg-slate-200 hover:bg-yellow-400 rounded-lg">
          <button onClick={handleLegbye}>Leg bye</button>
        </div>
        <div className="border boreder-gray-300 px-3 bg-slate-200 hover:bg-red-600 rounded-lg">
          <button onClick={handleOut}>OUT</button>
        </div>
      </div>
      <Commentry />
    </>
  );
};

export default Home;
