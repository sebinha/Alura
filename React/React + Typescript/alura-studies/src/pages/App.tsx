import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefas } from '../types/tarefa';
import style from './App.module.scss';
import { useState } from 'react'

function App() {
  const [materias, setMaterias] = useState<ITarefas[]>([])
  const [selecionado, setSelecionado] = useState<ITarefas>()

  const selecionaTarefa = (tarefaSelecionada: ITarefas) => {
    setSelecionado(tarefaSelecionada)
    setMaterias(materiasAnteriores => materiasAnteriores.map(materia => ({
      ...materia,
      selecionado: tarefaSelecionada.id === materia.id ? true : false
    })))
  }

  const finalizaTarefa = () => {
    if (selecionado) {
      setMaterias(materiasAnteriores => materiasAnteriores.map(materia => {
        if (materia.id === selecionado.id) {
          return {
            ...materia,
            selecionado: false,
            completado: true
          }
        }
        return materia
      }))
      setSelecionado(undefined)
    }
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setMaterias={setMaterias}/>
      <Cronometro selecionado={selecionado} finalizaTarefa={finalizaTarefa}/>
      <Lista materias={materias} selecionaTarefa={selecionaTarefa}/>
    </div>
  );
}

export default App;
