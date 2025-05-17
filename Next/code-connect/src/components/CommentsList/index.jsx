import { Comments } from "../Comments";
import { Replies } from "../Replies";
import { ReplyButton } from "../ReplyButton";

import styles from "./commentslist.module.css";

export const CommentsList = ({ comments }) => {
  return (
    <section className={styles.comments}>
      <h2>Comentários</h2>
      <ul>
        {comments.length > 0 ? comments.map((comment) => (
          <li key={comment.id}>
            <Comments comment={comment} key={comment.id}/>
            <ReplyButton comment={comment} />
            <Replies comment={comment}/>
          </li>
        )) : null}
      </ul>
    </section>
  );
};
