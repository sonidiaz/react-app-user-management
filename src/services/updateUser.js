export default async function updateUser ( id ) {
  try {
    const respuesta = await fetch(`https://reqres.in/api/users/${id}`, {
    method: 'PUT'
  })
  return await respuesta.json();
  } catch (error) {
    return error;
  }

}