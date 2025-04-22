import { CardPost } from "@/components/CardPost";
import logger from "@/utils/logger";
import { remark } from "remark";
import html from "remark-html";
import styles from "./page.module.css";
import prisma from "../../../../prisma/db";

async function getPostsBySlug(slug) {
  const response = await prisma.post.findMany({
    where: {
      slug: slug,
    },
    include: {
      author: true,
    },
  });


  if (response.length == 0) {
    logger.error("Nenhum post encontrado com o slug: " + slug);
    return {};
  }
  logger.info("Posts obtidos com sucesso");

  const post = response[0];

  const processedContent = await remark().use(html).process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;

  return post;
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
    </div>
  );
};
export default PagePost;
