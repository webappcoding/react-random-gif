import React, { useState } from "react";
import Loader from "react-loader-spinner";
import useGif from "../hooks/useGif";

const RandomGifTag = () => {
  const [tag, setTag] = useState("cat");
  const { gif, fetchData, loading } = useGif();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(tag);
  };
  return (
    <div className="random__gif">
      <div className="gif__content">
        <img src={gif} alt="random" />
      </div>

      <form onSubmit={handleSubmit} className="gif__actions">
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <button type="submit">
          {loading ? (
            <Loader type="ThreeDots" color="#fff" height={10} />
          ) : (
            "Generate By Tag"
          )}
        </button>
      </form>
    </div>
  );
};

export default RandomGifTag;
