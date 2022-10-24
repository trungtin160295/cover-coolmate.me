import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, isProductdData) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [imgProduct, setImgProduct] = useState(null);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source(); // <-- 1st step

    async function fetchData() {
      try {
        let res = await axios.get(url, {
          cancelToken: ourRequest.token, // <-- 2nd step
        });

        let data = res && res.data ? res.data : null; // true, false
        if (data && isProductdData === true) {
          const setimgProduct = data.linkImages.map((item) => {
            return {
              original: item,
              thumbnail: item,
              originalWidth: "100%",
              originalHeght: "100%",
            };
          });
          setImgProduct(setimgProduct);
        }

        setData(data);
        setIsLoading(false);
        setIsError(false);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      }
    }

    setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      ourRequest.cancel("Operation canceled by the user."); // <-- 3rd step
    };
  }, [url]);

  return {
    data,
    isLoading,
    isError,
    imgProduct,
  };
};

export default useFetch;
