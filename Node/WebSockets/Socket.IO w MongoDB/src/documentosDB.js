import { documentosColecao } from "./dbconnect.js";

const excluirDocumento = (titulo) => {
  return documentosColecao.deleteOne({ titulo });
};

const inserirDocumento = (titulo) => {
  return documentosColecao.insertOne({ titulo, texto: "" });
};

const pegaDocumentos = () => {
  const documentos = documentosColecao.find().toArray();
  return documentos;
};

const encontrarDocumento = (titulo) => {
  const documento = documentosColecao.findOne({ titulo });
  return documento;
};

const atualizaTexto = (titulo, texto) => {
  return documentosColecao.updateOne({ titulo }, { $set: { texto } });
};


export {
  encontrarDocumento,
  atualizaTexto,
  pegaDocumentos,
  inserirDocumento,
  excluirDocumento
};
