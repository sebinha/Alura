import fs from "fs";
import path from "path";
import tratarErro from "./erros/funcoesErro.js";
import { separaParagrafos } from "./index.js";
import { outputMelhorado } from "./helpers.js";
import { Command } from "commander";
import chalk from "chalk";

const criandoCaminho = process.argv;
const link = criandoCaminho[2];
const endereco = criandoCaminho[3];

const program = new Command();

const processaArquivo = (texto, destino) =>{

    fs.readFile(texto, "utf-8", (err, data) => {
      try {
        if (err) throw err;
        const resultado = separaParagrafos(data);
        salvaArquivo(destino, resultado);
      } catch (err) {
        tratarErro(err);
      }
    });
}

program
  .version("0.0.1")
  .option("-t, --texto <string>", "caminho do texto a ser processado")
  .option(
    "-d, --destino <string>",
    "caminho da pasta onde salvar o arquivo de resultados"
  )
  .action((options) => {
    const { texto, destino } = options;

    if (!texto || !destino) {
      console.error(chalk.red("erro: favor inserir caminho de origem e destino"));
      program.help()
      return
    }
    
    const caminhoTexto = path.resolve(texto)
    const caminhoDestino = path.resolve(destino)

    try{
        processaArquivo(caminhoTexto, caminhoDestino)
        console.log(chalk.green('texto processado com sucesso'))
    } catch(err){
        console.log('ocorreu um erro no processamento: ', err)
    }

  });

  program.parse()


const salvaArquivo = async (endereco, outputtexto) => {
  const stringTexto = outputMelhorado(outputtexto);
  const enderecoArquivo = `${endereco}/resultado.txt`;
  try {
    await fs.promises.writeFile(enderecoArquivo, stringTexto);
    console.log("Arquivo criado");
  } catch (error) {
    throw error;
  }
};

const salvaArquivo2 = (endereco, outputtexto) => {
  const stringTexto = JSON.stringify(outputtexto);
  const enderecoArquivo = `${endereco}/resultado.txt`;
  fs.promises
    .writeFile(enderecoArquivo, stringTexto)
    .then(() => {
      console.log("Arquivo criado");
    })
    .catch((err) => {
      throw err;
    })
    .finally(() => {
      console.log("Operação finalizada.");
    });
};

export default salvaArquivo;
