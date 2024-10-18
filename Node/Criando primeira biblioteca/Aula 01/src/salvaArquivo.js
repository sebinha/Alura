import fs from "fs";

const salvaArquivo = (endereco, outputtexto) => {
  const stringTexto = JSON.stringify(outputtexto);
  const enderecoArquivo = `${endereco}/resultado.txt`;
  try {
    fs.promises.writeFile(enderecoArquivo, stringTexto);
  } catch (error) {
    console.log(error)
  }
};

export default salvaArquivo;
