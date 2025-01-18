import style from './Relogio.module.scss';

interface Props{
  tempo: number
}

export default function Relogio({tempo = 0}: Props) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  const [minutosDezenas, minutosUnidades] = String(minutos).padStart(2, '0');
  const [segundosDezenas, segundosUnidades] = String(segundos).padStart(2, '0');
    return (
        <>
          <span className={style.relogioNumero}>{minutosDezenas}</span>
          <span className={style.relogioNumero}>{minutosUnidades}</span>
          <span className={style.relogioDivisao}>:</span>
          <span className={style.relogioNumero}>{segundosDezenas}</span>
          <span className={style.relogioNumero}>{segundosUnidades}</span>
        </>
      )
}