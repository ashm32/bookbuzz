import axios from 'axios';
import { setError } from '../actions/errorActions';

// Function to make an API request
export const fetchBookData = async () => {
  try {
    const response = await axios.get('https://openlibrary.org/works/OL18020194W/bookshelves.json');

    // Process the response

    return response.data;
  } catch (error) {
    // Handle the error
    setError('An error occurred while fetching book data.');



    throw error; // Rethrow the error to propagate it
  }
};
