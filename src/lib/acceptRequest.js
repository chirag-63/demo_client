import axios from "axios";

export const acceptRequest = async (senderId) => {
  try {
    const result = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/profile/accept`,
      {
        senderId: senderId,
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
