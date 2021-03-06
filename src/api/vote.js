import API from ".";

export const createVote = async (vote) => {
  try {
    const res = await API.post(`/vote/create`, vote);
    return res.data.poll;
  } catch (error) {
    throw error.response.data;
  }
};
