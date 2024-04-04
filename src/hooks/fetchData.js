import axios from "axios";

export const Home = async () => {
  try {
    const response = await axios.get(
      "https://api-aniwatch.onrender.com/anime/home"
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const AnimebyId = async (id) => {
  try {
    const response = await axios.get(
      `https://api-aniwatch.onrender.com/anime/info?id=${id}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
