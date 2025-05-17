import Image from "next/image";
import styles from "./comments.module.css";

export const Comments = ({ comment }) => {
  return (
    <>
      {comment ? (
        <div className={styles.comment}>
          <Image
            src={comment.author.avatar}
            width={32}
            height={32}
            alt={`Avatar do(a) ${comment.author.username}`}
          />
          <strong>@{comment.author.username}</strong>
          <p>{comment.body}</p>
        </div>
      ) : null}
    </>
  );
};
