const filtraOcorrencias = (paragrafo) => {
  return Object.keys(paragrafo).filter((chave) => paragrafo[chave] > 1);
};

const outputMelhorado = (listaPalavras) => {
  let textoFinal = "";

  listaPalavras.forEach((paragrafo, indice) => {
    const duplicadas = filtraOcorrencias(paragrafo).join(", ");
    textoFinal += `Palavras duplicadas no paragrafo ${
      indice + 1
    }: ${duplicadas}\n`;
  });

  return textoFinal;
};

export { outputMelhorado };
