import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUsuario = new User('Victor', 'Victor@gmail.com', '2024-01-01')
const novoAdmin =  new Admin('Clovis', 'Clovis@gmail.com', '2024-01-01')
const novoDocente = new Docente('Marcelo', 'Marcelo@gmail.com', '2024-01-01')

// novoUsuario.nome = 'Clovis' Not private entity
// console.log(novoUsuario)

// novoUsuario.#nome = 'Clovis' Private entity

// console.log(novoUsuario.nome)
// novoUsuario.nome = 'Clovis'
// console.log(novoUsuario.nome)

// console.log(`${novoUsuario.exibirInfos()} \n${novoAdmin.exibirInfos()} \n${novoDocente.exibirInfos()}`)

const dadosGenericos = User.exibirInfosGenericas('Victor', 'victor@gmail.com')
console.log(dadosGenericos)