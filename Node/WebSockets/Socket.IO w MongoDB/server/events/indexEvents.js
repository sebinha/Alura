import { inserirDocumento, encontrarDocumento, pegaDocumentos } from "../db/documentosDB.js";

export default function IndexEvents(socket, io) {
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
}
