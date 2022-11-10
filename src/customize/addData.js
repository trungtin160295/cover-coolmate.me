import { useEffect, useState } from "react";
import axios from "axios";

const useAxiosPost = (url, payload) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .post(url, payload)
      .then((response) => setData(response.data))
      .catch((error) => setIsError(error.message))
      .finally(() => setIsLoading(true));
  }, []);

  return { data, isError, isLoading };
};
export default useAxiosPost;
