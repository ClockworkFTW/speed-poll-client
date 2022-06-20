import API from ".";

export const castVote = async (pollId, optionId) => {
  try {
    const res = await API.post(`/vote/cast`, { pollId, optionId });
    return res.data.poll;
  } catch (error) {
    throw error.response.data;
  }
};
