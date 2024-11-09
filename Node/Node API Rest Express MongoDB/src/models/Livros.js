import mongoose, { Schema, model } from "mongoose";
import { autorSchema } from "./Autores.js";

const livroSchema = new Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    titulo: {
      type: String,
      required: true,
    },
    editora: String,
    preco: Number,
    paginas: Number,
    autor: autorSchema,
  },
  { versionKey: false }
);

export default model("livros", livroSchema);
