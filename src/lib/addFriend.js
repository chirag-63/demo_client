import axios from "axios";

export const addFriend = async (username) => {
  try {
    const result = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/profile/send/${username}`,{},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(result.data.message);
  } catch (error) {
    console.error(error);
  }
};
