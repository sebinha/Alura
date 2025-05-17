import { CardPost } from "@/components/CardPost";
import logger from "@/utils/logger";
import { remark } from "remark";
import html from "remark-html";
import styles from "./page.module.css";
import prisma from "../../../../prisma/db";
import { notFound } from "next/navigation";
import { CommentsList } from "@/components/CommentsList";

async function getPostsBySlug(slug) {
  try {
    const response = await prisma.post.findFirst({
      where: {
        slug: slug,
      },
      include: {
        author: true,
        comments: {
          where: {
            parentId: null,
          },
          include: {
            author: true,
            children: {
              include: {
                author: true,
              },
            },
          },
        },
      },
    });

    if (!response) {
      logger.error("Nenhum post encontrado com o slug: " + slug);
      throw new Error("Nenhum post encontrado com o slug: " + slug);
    }
    logger.info("Posts obtidos com sucesso");

    const processedContent = await remark()
      .use(html)
      .process(response.markdown);
    const contentHtml = processedContent.toString();
    response.markdown = contentHtml;

    return response;
  } catch (error) {
    logger.error("Erro ao obter posts: " + error.message);
  }
  notFound();
}

const PagePost = async ({ params }) => {
  const { slug } = await params;

  const post = await getPostsBySlug(slug);
  return (
    <div>
      <CardPost post={post} highlight />
      <h3 className={styles.subtitle}>Código:</h3>
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
      </div>
      <div>
        <CommentsList comments={post.comments} />
      </div>
    </div>
  );
};
export default PagePost;
