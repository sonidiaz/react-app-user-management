export default async function login({ email, password }) {
  try {
    const respuesta = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return await respuesta.json();
  } catch (error) {
    return error;
  }
}
