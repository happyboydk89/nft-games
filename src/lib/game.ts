import axios from 'axios';

export const getGames = async () => {
  try {
    const response = await axios.get(
      `${process.env.base_url}/games?key=${process.env.rawg_key}&page_size=23`,
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getNewGames = async () => {
  try {
    const response = await axios.get(
      `${process.env.base_url}/games?key=${process.env.rawg_key}&ordering=released&page_size=23`,
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getTopGames = async () => {
  try {
    const response = await axios.get(
      `${process.env.base_url}/games?key=${process.env.rawg_key}&ordering=-rating&page_size=23`,
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
