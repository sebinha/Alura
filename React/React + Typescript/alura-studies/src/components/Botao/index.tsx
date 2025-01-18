import style from "./Botao.module.scss";

interface BotaoProps {
  children: React.ReactNode;
  type: "submit" | "button" | "reset" 
  onClick?: () => void
}

const Botao = (props: BotaoProps) => {

  return <button type={props.type} onClick={props.onClick} className={style.botao}>{props.children}</button>;
};

export default Botao;
