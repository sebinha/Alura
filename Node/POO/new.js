const User = function(nome, email){
    this.nome = nome
    this.email = email

    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
}

const usuario = new User('Victor', 'victor@gmail.com')
console.log(usuario.exibirInfos())