export default async function deleteUser ( id ) {
  try {
    const respuesta = await fetch(`https://reqres.in/api/users/${id}`, {
    method: 'DELETE'
  })
  return respuesta.status;
  } catch (error) {
    return error;
  }

}