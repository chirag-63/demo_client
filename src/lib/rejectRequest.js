import axios from "axios";

export const rejectRequest = async (senderId) => {
  try {
    const result = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/profile/reject`,
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
