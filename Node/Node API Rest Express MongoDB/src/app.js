import express from "express";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();
const conexao =  await dbConnect()
routes(app);

conexao.once("open", () => {
  console.log("Conexao estabelecida");
});

conexao.on("error", (stream) => {
  console.log("Erro de conexao: ", stream);
});

// app.get("/", (req, res) => {
//   res.status(200).send("Rota do home");
// });

// app.get("/livros", async (req, res) => {
//   const livros = await Livros.find();
//   res.status(200).json(livros);
// });

// app.get("/livros/:id", (req, res) => {
//   const index = buscaIdLivro(req.params.id);
//   res.status(200).json(livros[index]);
// });

// app.post("/livros", (req, res) => {
//   console.log(req.body);
//   livros.push(req.body);
//   res.status(201).send("Livro salvo no db");
// });

// app.put("/livros/:id", (req, res) => {
//   const index = buscaIdLivro(req.params.id);
//   livros[index].livro = req.body.livro;
//   res.status(200).json(livros);
// });

// app.delete("/livros/:id", (req, res) => {
//   const index = buscaIdLivro(req.params.id);
//   livros.splice(index, 1);
//   res.status(200).json(livros);
// });

export default app;
