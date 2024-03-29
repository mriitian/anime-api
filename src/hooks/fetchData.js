import axios from "axios";

export const Home = async () => {
  try {
    const response = await axios.get(
      "https://api-aniwatch.onrender.com/anime/home"
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
