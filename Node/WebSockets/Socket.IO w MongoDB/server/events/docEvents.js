import { conexoesDocumentos, filtrarConexoesDocumento, removerConexao } from "../../public/utils/conexoesDocumento.js";
import {
  atualizaTexto,
  encontrarDocumento,
  excluirDocumento,
} from "../db/documentosDB.js";

export default function DocEvents(socket, io) {
  socket.on("pega-titulo", async ({ titulo, usuario }) => {
    const documento = await encontrarDocumento(titulo);
    if (documento) {
      socket.join(titulo);
      socket.emit("atualiza-texto", documento.texto);
      conexoesDocumentos({ titulo, usuario: usuario.usuario });
      const usuariosNoDocumento = filtrarConexoesDocumento(titulo);
      io.to(titulo).emit("usuarios_documento", usuariosNoDocumento);
    }
    socket.on("atualiza-texto", async ({ texto, titulo }) => {
      const documento = await atualizaTexto(titulo, texto);
      if (documento.modifiedCount) {
        socket.to(titulo).emit("atualiza-texto", texto);
      }
    });

    socket.on("excluir_documento", async (titulo) => {
      const resultado = await excluirDocumento(titulo);

      if (resultado.deletedCount) {
        io.emit("documento_excluido", titulo);
      }
    });

    socket.on("disconnect", () => {
      removerConexao(titulo, usuario);

      const usuariosNoDocumento = filtrarConexoesDocumento(titulo);
      io.to(titulo).emit("usuarios_documento", usuariosNoDocumento);
    });

  });

}
