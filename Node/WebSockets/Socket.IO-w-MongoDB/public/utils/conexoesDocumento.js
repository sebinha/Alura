const conectadosDocumento = []

function conexoesDocumentos(conexoes) {
    return conectadosDocumento.push(conexoes)
}

function filtrarConexoesDocumento(titulo) {
    return conectadosDocumento.filter(conexao => conexao.titulo === titulo).map(conexao => conexao.usuario)

}

function removerConexao(titulo, usuario) {
    const indice = conectadosDocumento.findIndex(conexao => conexao.titulo === titulo && conexao.usuario === usuario.usuario)

    if (indice !== -1) {
        conectadosDocumento.splice(indice, 1)
    }
}

export { conexoesDocumentos, filtrarConexoesDocumento, removerConexao }