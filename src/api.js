// api.js

const API_URL = 'https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts';

async function fetchData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    
    // Update data to include date
    const updatedData = data.map(post => ({
      ...post,
      date: new Date(post.created_at).toLocaleDateString()
    }));

    return updatedData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export { fetchData };
