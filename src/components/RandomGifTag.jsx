import React, { useState } from "react";

import useGif from "../hooks/useGif";

const RandomGifTag = () => {
  const [tag, setTag] = useState("");
  const { gif, fetchData } = useGif(tag);

  return (
    <div className="random__gif">
      <img src={gif} alt="random" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button type="button" onClick={fetchData}>
        Generate By Tag
      </button>
    </div>
  );
};

export default RandomGifTag;
