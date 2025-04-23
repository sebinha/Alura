import banner from "@/app/error/404.png";
import { Heading } from "@/components/Heading";
import { ArrowBack } from "@/components/icons/ArrowBack";
import Image from "next/image";
import Link from "next/link";
import style from "./error/error.module.css";

export default function NotFound() {
  return (
    <div className={style.container}>
      <Image src={banner} alt="Imagem de erro"/>
      <Heading>404! Página não encontrada.</Heading>
      <p className={style.text}>
        A página que você está procurando não existe ou foi removida. Verifique o link ou volte para o feed.
      </p>
      <Link href="/">
        Voltar ao feed <ArrowBack color="#81FE88" />
      </Link>
    </div>
  );
}
