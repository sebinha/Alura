const user = {
    nome: "Victor",
    email: "victor@gmail.com",
    nascimento: "2024-01-01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
      console.log(this.nome, this.email);
    },
  };

//   user.exibitInfos()

// const exibir = user.exibirInfos
// exibir

const exibir = function(){
    console.log(this.nome, this.email)
}