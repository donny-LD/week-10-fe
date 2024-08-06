
export const signup = async (username, email, pasaword) => {
  const response = await fetch("http://localhost:5001/users/", {
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
  const data = await response.json();
  console.log(data);
  return data;
};

export const login = async (username, password) => {
  const response = await fetch("http://localhost:5001/users/", {
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
  const data = await response.json();
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