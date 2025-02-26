import HttpClient from "../../infra/HttpClient/HttpClient";
import tokenService from "./tokenService";

export const authService = {
  login: async (credentials) => {
    const response = await HttpClient(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`,
      {
        method: "POST",
        body: credentials,
      }
    );
    if (!response.ok) throw new Error(response.statusText);
    const body = response.body;
    tokenService.save(body.data.access_token);

    await HttpClient("/api/refresh", {
      method: "POST",
      body,
    });
  },

  getSession: async (ctx = null) => {
    const token = tokenService.get(ctx);

    const response = await HttpClient(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/session`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        refresh: true,
        ctx,
      }
    );
    if (!response.ok) throw new Error(response.statusText);
    return response.body;  
  },
};

// export const authService = {
//     async login(credentials) {
//       return fetch("http://localhost:4000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(credentials),
//       }).then(async (data) => {
//         const body = await data.json();
//         console.log(body);
//       });
//     },
//   };
