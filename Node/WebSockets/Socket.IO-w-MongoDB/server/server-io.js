import LoginEvents from "./events/loginEvents.js";
import CadastroEvents from "./events/cadastroEvents.js";
import DocEvents from "./events/docEvents.js";
import IndexEvents from "./events/indexEvents.js";
import io from "./servidor.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizarUsuario); 

nspUsuarios.on("connection", (socket) => {
  DocEvents(socket, nspUsuarios);
  IndexEvents(socket, nspUsuarios);
});
io.of("/").on("connection", (socket) => {
  LoginEvents(socket, io);
  CadastroEvents(socket, io);
});
