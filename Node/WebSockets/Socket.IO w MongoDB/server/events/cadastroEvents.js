import { cadastrarUsuario, encontrarUsuario } from "../db/usuariosDB.js";

function CadastroEvents(socket, io) {
  socket.on("cadastrar_usuario", async (dados) => {
    const usuario = await encontrarUsuario(dados.usuario);
    if (usuario === null) {
      const resultado = await cadastrarUsuario(dados);
      if (resultado.acknowledged) {
        io.emit("usuario_cadastrado");
      } else {
        io.emit("usuario_nao_cadastrado");
      }
    } else {
      io.emit("usuario_existente");
    }
  });
}

export default CadastroEvents;
