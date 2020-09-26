import React from "react";
import useGif from "../hooks/useGif";
import Loader from "react-loader-spinner";

const RandomGif = () => {
  const { gif, fetchData, loading } = useGif();
  return (
    <div className="random__gif">
      <div className="gif__content">
        <img src={gif} alt="random" />
      </div>
      <div className="gif__actions">
        <button type="button" onClick={fetchData}>
          {loading ? (
            <Loader type="ThreeDots" color="#fff" height={10} />
          ) : (
            "Generate Random"
          )}
        </button>
      </div>
    </div>
  );
};

export default RandomGif;
