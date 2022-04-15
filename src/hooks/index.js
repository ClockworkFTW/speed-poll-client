import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { oauthSignIn } from "../redux/auth";

export const useOauth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { search, pathname } = useLocation();

  useEffect(() => {
    const qs = queryString.parse(search);

    if (qs.error) {
      navigate(pathname, { replace: true });
      dispatch(oauthSignIn({ user: null, error: qs.error }));
    }

    if (qs.user) {
      navigate(pathname, { replace: true });
      dispatch(oauthSignIn({ user: JSON.parse(qs.user), error: null }));
    }
  }, []);
};
