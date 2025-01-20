import Head from "next/head";
import Link from "../src/components/Link";

export default function Page404() {
  return (
    <>
      <Head>
        <title>Alura Cases - 404</title>
      </Head>
      <h1>404</h1>
      <Link href="/">Pagina do Home</Link>
    </>
  );
}
