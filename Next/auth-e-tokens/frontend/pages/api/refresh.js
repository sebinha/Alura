import nookies from "nookies";
import HttpClient from "../../src/infra/HttpClient/HttpClient";
import tokenService from "../../src/services/auth/tokenService";

const token = "refresh_token";

const controllers = {
  storeRefreshToken: async (req, res) => {
    const { refresh_token } = req.body.data;

    nookies.set({ req, res }, token, refresh_token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });

    res.json({ data: { message: "Refresh token stored!" } });
  },

  //   displayCookies: async (req, res) => {
  //     const ctx = { req, res };
  //     res.json({ data: { cookies: nookies.get(ctx) } });
  //   },

  refreshToken: async (req, res) => {
    const ctx = { req, res };
    const cookies = nookies.get(ctx);
    const refresh_token = cookies[token] || req.body.refresh_token;

    const response = await HttpClient(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/refresh`,
      {
        method: "POST",
        body: { refresh_token },
      }
    );
    if (response.ok) {
      const { refresh_token, access_token } = response.body.data;
      nookies.set(ctx, token, refresh_token, {
        httpOnly: true,
        sameSite: "lax",
      });

      tokenService.save(access_token, ctx);
      
      res.status(200).json({ data: response.body.data });
    } else {
      res.json({
        status: 401,
        message: "Unauthorized",
      });
    }

  },

  //   async regenerateTokens(req, res) {
  //     const ctx = { req, res };
  //     const cookies = nookies.get(ctx);
  //     const refresh_token = cookies[token];

  //     const refreshResponse = await HttpClient(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/refresh`,
  //       {
  //         method: "POST",
  //         body: {
  //           refresh_token,
  //         },
  //       }
  //     );

  //     if (refreshResponse.ok) {
  //       nookies.set(ctx, token, refreshResponse.body.data.refresh_token, {
  //         httpOnly: true,
  //         sameSite: "lax",
  //       });

  //       res.json({
  //         refreshResponse,
  //       });
  //     } else {
  //       res.json({
  //         status: 401,
  //         message: "Não autorizado",
  //       });
  //     }

  //     res.json({
  //       refreshResponse,
  //     });
  //   },
};

const controlledBy = {
  POST: controllers.storeRefreshToken,
  //   GET: controllers.displayCookies,
  GET: controllers.refreshToken,
  PUT: controllers.refreshToken,
  DELETE: (req, res) => {
    const ctx = { req, res };
    nookies.destroy(ctx, token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });

    res.json({ data: { message: "Refresh token deleted!" } });
  }
};

export default function handler(req, res) {
  const { method } = req;

  if (controlledBy[method]) return controlledBy[method](req, res);

  res.status(404).json({
    status: 404,
    message: "Not found",
  });
}
