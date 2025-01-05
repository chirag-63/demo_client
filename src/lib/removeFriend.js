import axios from "axios";

export const removeFriend = async (friendId) => {
  try {
    const result = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/profile/remove`,
      {
        friendId: friendId
      },
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
