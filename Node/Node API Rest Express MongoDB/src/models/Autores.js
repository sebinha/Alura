import mongoose, { Schema, model } from "mongoose";

const autorSchema = new Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    nome: { type: String, required: [true, "O nome é obrigatório"] },
    nacionalidade: String,
  },
  { versionKey: false }
);

const autorModel = model("autores", autorSchema);
export { autorModel, autorSchema };
