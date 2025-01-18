import { ITarefas } from "../../types/tarefa";
import Botao from "../Botao";
import style from "./Formulario.module.scss"
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ setMaterias }: { setMaterias: React.Dispatch<React.SetStateAction<ITarefas[]>> }) => {
  const [tempo, setTempo] = useState<string>("00:00:00");
  const [tarefa, setTarefa] = useState<string>("");


  const adicionaTarefa = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMaterias(antigasMaterias => [...antigasMaterias, { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() }]);
    setTarefa("");
    setTempo("00:00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={e => { adicionaTarefa(e) }}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={e => setTarefa(e.target.value)}
          placeholder="O que você quer estudar"
          required
        />

      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          value={tempo}
          onChange={e => setTempo(e.target.value)}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit">
        Adicionar
      </Botao>
    </form>
  )
}


export default Formulario;
