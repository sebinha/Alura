import Image from "next/image";
import { Avatar } from "../Avatar";
import styles from "./card.module.css";
import Link from "next/link";
import { incrementLikes, postComment } from "@/actions";
import ThumbsUpSpinner from "./ThumbsUpSpinner";
import ModalComments from "../ModalComments";

export const CardPost = ({ post, highlight, isHome = false }) => {
  const submitLike = incrementLikes.bind(null, post);

  const submitComment = postComment.bind(null, post);

  return (
    <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
      <header className={styles.header}>
        <figure style={{ height: highlight ? 300 : 133 }}>
          <Image
            src={post.cover}
            fill
            alt={`Capa do post de titulo: ${post.title}`}
          />
        </figure>
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        {isHome ? <Link href={`/posts/${post.slug}`}>Ver mais</Link> : null}
      </section>
      <footer className={styles.footer}>
        <div>
          <form action={submitLike}>
            <ThumbsUpSpinner />
            <p>{post.likes}</p>
          </form>
          <div>
            <ModalComments action={submitComment} />
            <p>{post.comments.length}</p>
          </div>
        </div>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};
