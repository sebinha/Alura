
import CadastroEvents from "./events/cadastroEvents.js";
import DocEvents from "./events/docEvents.js";
import IndexEvents from "./events/indexEvents.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  CadastroEvents(socket, io);
  DocEvents(socket, io);
  IndexEvents(socket, io);
});
