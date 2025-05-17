"use client";
import { useRef } from "react";
import { TextArea } from "../TextArea";
import { Modal } from "../Modal";
import { postReply } from "@/actions";
import { Button } from "../Button";
import { Comments } from "../Comments";
import styles from "./replybutton.module.css";

export const ReplyButton = ({ comment }) => {
  const modalRef = useRef(null);

  const action = postReply.bind(null, comment);

  const openModal = () => {
    modalRef.current.open();
  };

  return (
    <>
      <Modal ref={modalRef}>
        <form action={action}>
          <div className={styles.body}>
            <Comments comment={comment} />
          </div>
          <div className={styles.divider}></div>
          <TextArea
            name="reply"
            placeholder="Escreva sua resposta"
            defaultValue={`@${comment.author.username} `}
            rows={3}
            required
          />
          <div className={styles.footer}>
            <Button>Responder</Button>
          </div>
        </form>
      </Modal>
      <button
        type="button"
        className={styles.btn}
        onClick={() => {
          openModal();
        }}
      >
        Responder
      </button>
    </>
  );
};
