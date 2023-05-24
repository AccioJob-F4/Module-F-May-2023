export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUser = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_REQUEST });

    fetch("https://randomuser.me/api/")
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({ type: FETCH_USER_SUCCESS, payload: data.results });
      })
      .catch((err) => dispatch({ type: FETCH_USER_FAILURE, payload: err }));
  };
};
