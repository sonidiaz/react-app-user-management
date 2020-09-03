
class NetworkError extends Error {
  constructor() {
    super("There was a network error. Please try again in a few seconds.");
  }
}

export default async function getUsers(page) {
  try {
    const response = await fetch(`https://reqres.in/api/users/?page=${page}`);
    const results = await response.json();
    return results;
  } catch (err) {
    throw new NetworkError();
  }
}