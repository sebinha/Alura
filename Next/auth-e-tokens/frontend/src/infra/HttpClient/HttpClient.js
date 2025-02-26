import tokenService from "../../services/auth/tokenService";
import nookies from "nookies";

const HttpClient = async (fetchUrl, fetchOptions = {}) => {
  const defaultHeaders = fetchOptions?.headers || {};
  const options = {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      ...defaultHeaders,
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
  };

  return await fetch(fetchUrl, options)
    .then(async (response) => {
      return {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        body: await response.json(),
      };
    })
    .then(async (response) => {
      if (!fetchOptions.refresh) return response;
      if (response.status !== 401) return response;

      console.log("Refreshing token...");

      const isServer = Boolean(fetchOptions?.ctx);
      const refreshToken = fetchOptions?.ctx?.req?.cookies["refresh_token"];
      
      try {
        const refreshResponse = await HttpClient("http://localhost:3000/api/refresh", {
          method: isServer ? "PUT" : "GET",
          body: isServer ? { refresh_token: refreshToken } : undefined,
        });

        const newAccessToken = refreshResponse?.body?.data?.access_token;
        const newRefreshToken = refreshResponse?.body?.data?.refresh_token;

        if (isServer) {
          nookies.set(fetchOptions.ctx, "refresh_token", newRefreshToken, {
            httpOnly: true,
            sameSite: "lax",
            path: "/",
          });
        }

        tokenService.save(newAccessToken);

        return await HttpClient(fetchUrl, {
          ...options,
          headers: {
            Authorization: `Bearer ${newAccessToken}`,
          },
          refresh: false,
        });
      } catch (error) {
        console.log(error);
      }
    });
};

export default HttpClient;
