import User from "./User.js";

export default class Docente extends User{
    constructor(nome, email, nascimento, role = 'docente', ativo= true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(nomeEstudante, curso){
        return `O estudante ${nomeEstudante} foi aprovado no curso de ${curso} pelo responsável ${this.nome}`
    }

    reprovarEstudante(nomeEstudante, curso){
        return `O estudante ${nomeEstudante} foi reprovado no curso de ${curso} pelo responsável ${this.nome}`
    }
}

const professor =  new Docente('Victor', 'victor@gmail.com', '2024-01-01')

// console.log(professor) Retorna vazio pois é private
// console.log(professor.retornaObjUser()) // Retorna valor pois o private está em uma func
// console.log(professor.aprovarEstudante('Lucas', 'Estatística'))
// console.log(professor.exibirInfos())

// console.log(professor.nome)