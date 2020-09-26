import { useEffect, useState } from "react";
import axios from "axios";
const TOKEN = process.env.REACT_APP_API_KEY;

const useGif = (tag = "cat") => {
  const [gif, setGif] = useState("");

  const fetchData = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${TOKEN}`;
    const { data } = await axios.get(url);
    setGif(data.data.images.fixed_width_downsampled.url);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, fetchData };
};
export default useGif;
