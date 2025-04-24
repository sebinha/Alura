import prisma from "../../prisma/db";

export default async function incrementLikes(postId) {
  await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      likes: {
        increment: 1,
      },
    },
  });
}
