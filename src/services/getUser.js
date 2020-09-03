export default async function getUser(id) {
  try {
    const respuesta = await fetch(`https://reqres.in/api/users/${id}`, {
      method: "GET",
    });
    return await respuesta.json();
  } catch (error) {
    return error;
  }
}
