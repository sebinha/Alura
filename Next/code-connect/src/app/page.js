import { CardPost } from "@/components/CardPost";
import logger from "@/utils/logger.js";
import styles from "./page.module.css";
import Link from "next/link";
import prisma from "../../prisma/db.js";


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


async function getAllPosts(page, query) {
  const perPage = 6;
  const skip = (page - 1) * perPage;


  try {
    const posts = await prisma.post.findMany({
      skip,
      take: perPage,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: true,
      },
      where: {
        title: {
          contains: query || "",
          mode: "insensitive",
        },
      },
    });

    const totalPosts = await prisma.post.count();
    const totalPages = Math.ceil(totalPosts / perPage);

    return {
      data: posts,
      prev: page > 1 ? page - 1 : null,
      next: page < totalPages ? page + 1 : null,
    };
  } catch (error) {
    logger.error("Ops, algo deu errado: " + error.message);
    return { data: [], prev: null, next: null };
  }
}

export default async function Home({ searchParams }) {
  const { page, q } = await searchParams;

  const pages = parseInt(page || 1)

  const { data: posts, prev, next } = await getAllPosts(pages, q);

  return (
    <main className={styles.grid}>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} isHome />
      ))}
      <div className={styles.links}>
        {next && <Link href={{ pathname: "/", query: { page: next, q} }}>Próxima página</Link>}
        {prev && <Link href={{ pathname: "/", query: { page: prev, q} }}>Página anterior</Link>}
      </div>
    </main>
  );
}
