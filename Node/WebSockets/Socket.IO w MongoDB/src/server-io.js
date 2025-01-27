import io from "./servidor.js";
import {
  encontrarDocumento,
  atualizaTexto,
  pegaDocumentos,
  inserirDocumento,
  excluirDocumento,
} from "./documentosDB.js";

io.on("connection", (socket) => {
  socket.on("excluir_documento", async (titulo) => {
    const resultado = await excluirDocumento(titulo);

    if (resultado.deletedCount) {
      io.emit("documento_excluido", titulo);
    }
  });

  socket.on("inserir_documento", async (titulo) => {
    const documentoExistente = (await encontrarDocumento(titulo)) !== null;

    if (!documentoExistente) {
      const resultado = await inserirDocumento(titulo);

      if (resultado.acknowledged) {
        io.emit("documento_inserido", titulo);
      }
    } else {
      socket.emit("documento_existente", titulo);
    }
  });

  socket.on("obter_documentos", async (devolverDocumentos) => {
    const documentos = await pegaDocumentos();
    devolverDocumentos(documentos);
  });

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
});
