import style from "./Cronometro.module.scss";
import Botao from "../Botao";
import Relogio from "./Relogio";
import { ITarefas } from "../../types/tarefa";
import { horaEmSegundos } from "../../common/utils/hora";
import { useEffect, useState } from "react";

interface Props {
  selecionado: ITarefas | undefined
  finalizaTarefa: () => void
}

export default function Cronometro({ selecionado, finalizaTarefa }: Props) {
  const [tempo, setTempo] = useState<number>(0);
  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(horaEmSegundos(selecionado.tempo))
    }
  }, [selecionado])

  const regressiva = (contador: number = 0) => {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
    }, 1000);

    if (contador === 0) {
      finalizaTarefa();
    }
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao type="button" onClick={() => {
        regressiva(tempo)
      }}>
        Começar!
      </Botao>
    </div>
  )
}