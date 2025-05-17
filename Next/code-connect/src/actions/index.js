"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../prisma/db";

export async function incrementLikes(post) {
  // await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay of 2 seconds

  await prisma.post.update({
    where: {
      id: post.id,
    },
    data: {
      likes: {
        increment: 1,
      },
    },
  });
  revalidatePath("/");
  revalidatePath(`/posts/${post.slug}`);
}

export async function postComment(post, formData) {
  // await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay of 2 seconds

  const author = await prisma.author.findFirst({
    where: {
      username: "sebinha",
    },
  });

  await prisma.comment.create({
    data: {
      authorId: author.id,
      postId: post.id,
      body: formData.get("comment"),
    },
  });
  revalidatePath("/");
  revalidatePath(`/posts/${post.slug}`);
}

export async function postReply( parent, formData) {
  // await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay of 2 seconds

  const author = await prisma.author.findFirst({
    where: {
      username: "sebinha",
    },
  });

  const post = await prisma.post.findFirst({
    where: {
        id: parent.postId
    }
})

  await prisma.comment.create({
    data: {
      authorId: author.id,
      postId: post.id,
      parentId: parent.parentId ?? parent.id,
      body: formData.get("reply"),
    },
  });
  revalidatePath(`/posts/${post.slug}`);
}
