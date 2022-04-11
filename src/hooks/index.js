import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { setAuthUser } from "../redux/auth";
import { setNotification, clearNotification } from "../redux/notification";

export const useOauth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { search, pathname } = useLocation();

  useEffect(() => {
    const qs = queryString.parse(search);

    if (qs.error) {
      navigate(pathname, { replace: true });
      dispatch(setNotification({ type: "SIGN_IN_ERROR", message: qs.error }));

      const timer = setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      return () => {
        dispatch(clearNotification());
        clearTimeout(timer);
      };
    }

    if (qs.uuid && qs.username) {
      navigate(pathname, { replace: true });
      dispatch(setAuthUser({ uuid: qs.uuid, username: qs.username }));
    }
  }, []);
};
