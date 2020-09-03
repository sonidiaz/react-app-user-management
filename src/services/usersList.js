export default async function getUsers(page) {
  try {
    const response = await fetch(`https://reqres.in/api/users/?page=${page}`);
    const results = await response.json();
    return results;
  } catch (err) {
    return err;
  }
}
