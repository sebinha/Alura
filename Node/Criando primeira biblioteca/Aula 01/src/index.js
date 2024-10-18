const limpaPalavras = (palavra) => {
  const palavraLimpa = palavra.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    return palavraLimpa;
};

export const separaParagrafos = (paragrafos) =>{
    const separador = paragrafos.split("\n");
    return contaParagrafos(separador)
}

const contaParagrafos = (paragrafos) =>{
    const contagem = paragrafos.flatMap((paragrafo)=> {
        if (!paragrafo) return []
        return filtroPalavras(paragrafo)
      })
    
      return contagem
}

const filtroPalavras = (texto) => {
  const arrayPalavras = texto.split(" ");
  const dictPalavras = {};

  arrayPalavras.forEach((element) => {
      if (element.length >= 3){
          const palavraLimpa = limpaPalavras(element);
          dictPalavras[palavraLimpa] = (dictPalavras[palavraLimpa] || 0) + 1;
    }
        
  });
  
  return dictPalavras;
};
