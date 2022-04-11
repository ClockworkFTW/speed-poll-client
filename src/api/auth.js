import API from ".";

export const localSignIn = async (credentials) => {
  try {
    const res = await API.post("/auth/local/sign-in", credentials);
    return res.data.user;
  } catch (error) {
    throw error.response.data;
  }
};

export const localSignUp = async (credentials) => {
  try {
    const res = await API.post("/auth/local/sign-up", credentials);
    return res.data.user;
  } catch (error) {
    throw error.response.data;
  }
};

export const signOut = async () => {
  try {
    await API.get("/auth/sign-out");
  } catch (error) {
    throw error.response.data;
  }
};
