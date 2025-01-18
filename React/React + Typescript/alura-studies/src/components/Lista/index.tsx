import Item from './Item';
import style from './Lista.module.scss';
import { ITarefas } from '../../types/tarefa';

interface Props {
    materias: ITarefas[];
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

const ListaTarefas = ({materias, selecionaTarefa} : Props) => {

    return (
        <div className={style.listaTarefas}>
            <h2>Tarefas do dia</h2>
            <ul>
                {materias.map((materia) => (
                    <Item key={materia.id} {...materia} selecionaTarefa={selecionaTarefa} />)
                )
                }
            </ul>
        </div>
    );
};

export default ListaTarefas;