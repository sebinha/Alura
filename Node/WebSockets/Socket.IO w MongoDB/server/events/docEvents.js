import {
  atualizaTexto,
  encontrarDocumento,
  excluirDocumento,
} from "../db/documentosDB.js";

export default function DocEvents(socket, io) {
  socket.on("pega-titulo", async (titulo) => {
    socket.join(titulo);
    const documento = await encontrarDocumento(titulo);
    if (documento) {
      socket.emit("atualiza-texto", documento.texto);
    }
  });

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
}
