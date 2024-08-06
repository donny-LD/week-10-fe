const API_URL = "http://localhost:5001";

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }

  const data = await response.json();
  return data;
};

export const signup = async (username, email, password) => {
  console.log("welcome User");
  const response = await fetch("http://localhost:5001/users/signup", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await handleResponse.json();
  console.log(data);
  return data;
};

export const login = async (username, password) => {
  const response = await fetch("http://localhost:5001/users/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await handleResponse.json();
  console.log(data);
  return data;
};

//   const response = await fetch("http://localhost:5001/users/login", {
//     method: "POST",
//     header: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   });
//   if (response.ok) {
//     throw new error("login failed");
//   }
