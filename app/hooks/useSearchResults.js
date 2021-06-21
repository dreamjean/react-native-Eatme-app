import { useEffect, useState } from "react";

import businessesApi from "../api/businesses";

const useSearchResults = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  const searchApi = async (searchTerm) => {
    try {
      const response = await businessesApi.getListings(searchTerm);
      setResults(response.data.businesses);
    } catch (error) {
      setError("Something went wrong.");
      console.log(error);
    }
  };

  useEffect(() => {
    searchApi();
  }, []);

  return { results, error, searchApi };
};

export default useSearchResults;
