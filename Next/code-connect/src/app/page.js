import { CardPost } from "@/components/CardPost";
import logger from "@/utils/logger.js";
import styles from "./page.module.css";
import Link from "next/link";

// const post = {
//   "id": 1,
//   "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
//   "title": "Introdução ao React",
//   "slug": "introducao-ao-react",
//   "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
//   "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
//   "author": {
//       "id": 101,
//       "name": "Ana Beatriz",
//       "username": "anabeatriz_dev",
//       "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
//   }
// }

async function getAllPosts(page) {
  try {
    const response = await fetch(
      `http://localhost:3001/posts?_page=${page}&_per_page=6`
    );
    if (!response.ok) throw new Error("Falha na rede");
    return response.json();
  } catch (error) {
    logger.error("Ops, algo correu mal: " + error.message);
    return [];
  }
}

export default async function Home({ searchParams }) {
  const { page } = await searchParams;

  const { data: posts, prev, next } = await getAllPosts(page || 1);

  return (
    <main className={styles.grid}>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
      <div className={styles.links}>
        {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
        {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
      </div>
    </main>
  );
}
