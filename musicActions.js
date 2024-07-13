import axios from 'axios';

export const searchMusic = (query) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/search?query=${query}`);
    dispatch({ type: 'SEARCH_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'SEARCH_FAILURE', payload: error });
  }
};
