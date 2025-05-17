import prisma from "../../../../../../prisma/db";

export async function GET(_request, { params }) {
    const { id } = await params;

  const replies = await prisma.comment.findMany({
    where: {
      parentId: parseInt(id),
    },
    include: {
      author: true,
    },
  });

  if (!replies) {
    return new Response("Nenhuma resposta encontrada", { status: 404 });
  } else {
    return new Response(JSON.stringify(replies), { status: 200 });
  }
}
