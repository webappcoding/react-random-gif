import { useEffect, useState } from "react";
import axios from "axios";
const TOKEN = process.env.REACT_APP_API_KEY;

const useGif = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (tag) => {
    setLoading(true);
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${TOKEN}${
        tag ? "&tag=" + tag : ""
      }`;
      const { data } = await axios.get(url);
      setGif(data.data.images.fixed_height_downsampled.url);
      setLoading(false);
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        setError(message);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, fetchData, error, loading };
};
export default useGif;
