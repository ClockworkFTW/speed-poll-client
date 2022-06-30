import API from ".";

export const createComment = async (comment) => {
  try {
    const res = await API.post(`/comment/create`, comment);
    return res.data.poll;
  } catch (error) {
    throw error.response.data;
  }
};
