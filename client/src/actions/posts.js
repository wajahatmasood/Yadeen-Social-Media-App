import * as api from "../api";
// * as mean --> we import every thing from api as api

// creating action creators

// as we are working with async data --> to fetch all posts ---> so time will be requires so we use THUNK
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.messsage)
  }
};


export const createPost = (post) => async(dispatch) => {
  try {
    const {data} = await api.createPost(post);
    dispatch({type: 'CREATE', payload: data})
  } catch (error) {
    console.log(error)
  }
}
export const updatePost = () => async(dispatch) => {
  try {
  } catch (error) {

  }
}