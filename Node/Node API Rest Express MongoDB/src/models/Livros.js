import mongoose, { Schema, model } from "mongoose";
import { autorSchema } from "./Autores.js";

const livroSchema = new Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    titulo: {
      type: String,
      required: [true, "O título é obrigatório"],
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória"],
      enum: {
        values: ["Editora A", "Editora B", "Editora C"],
        message: "Editora inválida, a editora fornecida foi {VALUE}",
      },
    },
    preco: Number,
    paginas: {
      type: Number,
      validate: {
        validator: function (value) {
          return value >= 10 && value <= 5000;
        },
        message: "O número de páginas deve ser maior que 10 e menor que 5000. O valor fornecido foi {VALUE}",
      }
    },
    autor: {
      type: autorSchema,
      required: [true, "O autor é obrigatório"],
    },
  },
  { versionKey: false }
);

const livros = model("livros", livroSchema);
export default livros;
