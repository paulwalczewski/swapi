import { API_URL } from '../config';

const getPeople = async (searchFraze, pageNr) => {
  const url = searchFraze ? `${API_URL}/people/?search=${searchFraze}&page=${pageNr}` : `${API_URL}/people/?page=${pageNr}`

  try {
    const response = await fetch(url);
    const json = await response.json();

    return json;
  } catch (error) {
    console.error('Error:', error);
  }
}

export {
  getPeople
};

