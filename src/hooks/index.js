import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

export const useQueryError = () => {
  const [error, setError] = useState(null);

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (queryString.parse(search).error) {
      setError(queryString.parse(search).error);
      navigate(pathname, { replace: true });
    }
  }, []);

  return [error, setError];
};
