import API from ".";

export const castVotes = async (pollId, votes) => {
  try {
    const res = await API.post(`/vote/cast`, { pollId, votes });
    return res.data.poll;
  } catch (error) {
    throw error.response.data;
  }
};
