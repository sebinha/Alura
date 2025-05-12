"use client";

import { useFormStatus } from "react-dom";
import { IconButton } from "../IconButton";
import { ThumbsUp } from "../icons/ThumbsUp";
import { Spinner } from "../Spinner";

export default function ThumbsUpSpinner() {
  const { pending } = useFormStatus();
  // If the form is pending, show a spinner instead of the thumbs up icon
  return <IconButton>{pending ? <Spinner /> : <ThumbsUp />}</IconButton>;
}
