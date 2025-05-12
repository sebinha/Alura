"use client";

import { useFormStatus } from "react-dom";
import { Spinner } from "../Spinner";
import { ArrowForward } from "../icons/ArrowForward";
import { Button } from "../Button";

export const CommentButton = ({ children }) => {
  const { pending } = useFormStatus();
  return (
    <Button aria-disabled={pending} type="submit">
      {pending ? (
        <Spinner />
      ) : (
        <>
          {children} <ArrowForward />
        </>
      )}
    </Button>
  );
};
