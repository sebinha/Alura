import { CardPost } from "@/components/CardPost";
import logger from "@/utils/logger";
import { remark } from "remark";
import html from "remark-html";
import styles from "./page.module.css";

async function getPostsBySlug(slug) {
  const url = `http://localhost:3001/posts?slug=${slug}`;
  const response = await fetch(url);
  if (!response.ok) {
    logger.error("Ops, alguma coisa correu mal");
    return {};
  }
  logger.info("Posts obtidos com sucesso");
  const data = await response.json();
  if (data.length == 0) {
    return {};
  }

  const post = data[0];

  const processedContent = await remark().use(html).process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;

  return post;
}

const PagePost = async ({ params }) => {
    const { slug } = await params;

    const post = await getPostsBySlug(slug)
    return (<div>
        <CardPost post={post} highlight />
        <h3 className={styles.subtitle}>Código:</h3>
        <div className={styles.code}>
            <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
        </div>
    </div>)
}
export default PagePost;
