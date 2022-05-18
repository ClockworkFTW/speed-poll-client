import API from ".";

export const castVote = async (vote) => {
  try {
    const res = await API.post(`/vote/cast`, { uuid: vote });
    return res.data.poll;
  } catch (error) {
    throw error.response.data;
  }
};
