"use client";

import { useEffect, useState } from "react";
import styles from "./replies.module.css";
import { Comments } from "../Comments";
import { ReplyButton } from "../ReplyButton";

export const Replies = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);

  const [replies, setReplies] = useState([]);

  async function fetchReplies() {
    const response = await fetch(`/api/comments/${comment.id}/replies`);
    const data = await response.json();
    if (response.ok) {
      setReplies(data);
    } else {
      console.error("Erro ao obter respostas:", data);
    }
  }

  useEffect(() => {
    if (showReplies) {
      fetchReplies();
    }
  }, [showReplies]);

  return (
    <div className={styles.container}>
      <div className={styles.replies}>
        {comment.children.length > 0 ? (
          <button
            className={styles.btn}
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies ? "Ocultar" : "Ver"} respostas
          </button>
        ) : null}
        {showReplies ? (
          <ul>
            {replies.map((reply) => (
              <li key={reply.id}>
                <Comments comment={reply} />
                <ReplyButton comment={reply} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};
