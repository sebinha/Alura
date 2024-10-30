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
  
  const admin = {
    nome: "Valerie",
    email: "Valerie@gmail.com",
    nascimento: "2024-01-01",
    role: "admin",
    ativo: true,
    criarCurso: function () {
      console.log("Curso criado");
    },
  };
  
  Object.setPrototypeOf(admin, user);
  
  admin.exibirInfos();
  admin.criarCurso();
  