import React from "react";
import useGif from "../hooks/useGif";

const RandomGif = () => {
  const { gif, fetchData } = useGif();
  return (
    <div className="random__gif">
      <img src={gif} alt="random" />
      <button type="button" onClick={fetchData}>
        Generate
      </button>
    </div>
  );
};

export default RandomGif;
