const tratarErro = (erro) =>{
    if (erro.code === 'ENOENT'){
        throw Error('Arquivo não encontrado')
    } else {
        console.log('Erro não identificado', erro)
    }
}


export default tratarErro