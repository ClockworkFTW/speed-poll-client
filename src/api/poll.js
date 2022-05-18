import API from ".";

export const getPolls = async () => {
  try {
    const res = await API.get("/poll");
    return res.data.polls;
  } catch (error) {
    throw error.response.data;
  }
};

export const getPoll = async (pollId) => {
  try {
    const res = await API.get(`/poll/${pollId}`);
    return res.data.poll;
  } catch (error) {
    throw error.response.data;
  }
};

export const createPoll = async (poll) => {
  try {
    const res = await API.post("/poll/create", poll);
    return res.data.poll;
  } catch (error) {
    throw error.response.data;
  }
};
