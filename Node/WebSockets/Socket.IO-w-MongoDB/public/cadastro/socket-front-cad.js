const socket = io();

function emitCadastrarUsuario(dados) {
  socket.emit("cadastrar_usuario", dados);
}

socket.on("usuario_cadastrado", () => {
  alert("Usuário cadastrado com sucesso!");
  window.location.href = "/login/index.html";
});

socket.on("usuario_nao_cadastrado", () => {
  alert("Erro ao cadastrar usuário!");
});

socket.on("usuario_existente", () => {
  alert("Usuário já cadastrado!");
});

export { emitCadastrarUsuario };
