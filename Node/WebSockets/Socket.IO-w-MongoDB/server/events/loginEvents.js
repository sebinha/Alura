import { encontrarUsuario } from "../db/usuariosDB.js";
import autenticarUsuario from "../db/utils/autenticarUsuario.js";
import criarJwt from "../db/utils/criarJWT.js";

function LoginEvents(socket, io) {
  socket.on("autenticar_usuario", async ({ usuario, senha }) => {
    const usuarioEncontrado = await encontrarUsuario(usuario);
  
    if (usuarioEncontrado) {
      const autenticou = autenticarUsuario(
        usuarioEncontrado.hashDoSal,
        usuarioEncontrado.sal,
        senha
      );
      if (autenticou) {
        const jwt = criarJwt({ usuario });
        socket.emit("autenticado", jwt);
      } else {
        socket.emit("nao_autenticado");
      }
    } else {
      socket.emit("usuario_nao_encontrado");
    }
  });
}

export default LoginEvents;
