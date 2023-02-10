import {useState, useEffect} from "react";

export const useFetch = (path, method) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(path, { method: method.toUpperCase() })
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return data;
};
