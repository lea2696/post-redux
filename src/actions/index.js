import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPostsAndUser = () => async (dispatch, getStore) => {
  console.log("Before");
  await dispatch(fetchPosts()); //En este caso se coloca el await porque toda la logica que esta por debajo depende de que esta promesa se cumpla.
  console.log("after");
  const user = getStore().post.map(post => post.userId);
  const [...uniqueUser] = new Set(user);
  uniqueUser.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => {
  return async function(dispatch) {
    const response = await jsonPlaceHolder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};
export const fetchUser = function(id) {
  return async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};
