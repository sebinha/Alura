import User from "./User.js";

export default class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo){
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, qtdVagas){
        return `O curso de ${nomeCurso} foi criado com ${qtdVagas} vagas`
    }

    excluirCurso(nomeCurso){
        return `O curso de ${nomeCurso} foi excluido.`
    }

    desativarPerfil(){
        return `O perfil foi desativado.`
    }

    // exibirInfos(){
    //     const infos = super.exibirInfos()

    //     return `admin - ${infos}`
    // }
}

const usuario = new Admin('Victor', 'Victor@gmail.com', '2024-01-01')

// console.log(usuario)
// console.log(usuario.exibirInfos())
// console.log(usuario.criarCurso('Python', '20'))