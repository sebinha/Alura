"use client";

import { useRef } from "react";
import { Modal } from "../Modal";
import { IconButton } from "../IconButton";
import { Chat } from "../icons/Chat";
import { TextArea } from "../TextArea";
import { CommentButton } from "../CommentButton";
import styles from "./modalcomments.module.css";
import { Subheading } from "../Subheading";

export default function ModalComments({ action }) {
  const modalRef = useRef(null);

  return (
    <>
      <Modal ref={modalRef}>
        <form action={action} onSubmit={() => modalRef.current.close()}>
          <Subheading>Deixe seu comentário sobre o post:</Subheading>
          <TextArea
            rows={8}
            name="comment"
            required
            placeholder="Deixe seu comentário"
          />
          <div className={styles.footer}>
            <CommentButton>Comentar</CommentButton>
          </div>
        </form>
      </Modal>
      <IconButton onClick={() => modalRef.current.open()}>
        <Chat />
      </IconButton>
    </>
  );
}
