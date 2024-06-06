import axios from "axios";
import { useEffect, useState } from "react";



export function UseFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect
    (() => {
      axios.get(`${url}`)
        .then(results => { setData(results.data) })
        .catch(e => console.log(e))
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => {
        console.log("inside usefetch"+ url)
      }
    }, []);
  return [data, error, loading]
}

