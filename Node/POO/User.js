export default class User {
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;

  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }

  criarPerfil() {
    return `Perfil criado com sucesso`;
  }

  apagarPerfil() {
    return `Perfil apagado com sucesso`;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}`;
  }

  exibirListaCursos() {
    return `Os cursos disponiveis são ...`;
  }

  matricularEmCurso() {
    return `Você se matriculou em X curso`;
  }

  exibirCursosMatriculados() {
    return `Cursos em que está matriculado`;
  }

  retornaObjUser() {
    return {
      nome: this.#nome,
      email: this.#email,
      nascimento: this.#nascimento,
      role: this.#role,
      ativo: this.#ativo,
    };
  }

  get nome(){
    return this.#nome
  }
  get email(){
    return this.#email
  }
  get nascimento(){
    return this.#nascimento
  }
  get role(){
    return this.#role
  }
  get ativo(){
    return this.#ativo
  }

  set nome(novoNome){
    if (novoNome === ""){
        throw new Error('Nome vazio não permitido')
    }
    return this.#nome = novoNome
  }

  exibirInfos(){
    if(this.role === 'estudante'){
        return `dados estudante: ${this.nome}, ${this.role}`
    }
    if(this.role === 'admin'){
        return `dados admin: ${this.nome}, ${this.role}`
    }
    if(this.role === 'docente'){
        return `dados docente: ${this.nome}, ${this.role}`
    }
  }

  static exibirInfosGenericas(nome, email){
    return `${nome}, ${email}`
  }
}

const novoUser = new User("Victor", "Victor@gmail.com", "2012-02-23");
// console.log(novoUser)
// console.log(novoUser.exibirInfos())
