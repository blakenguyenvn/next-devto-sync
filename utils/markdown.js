
import { remark } from 'remark';
import html from 'remark-html';

export const markdownToHtml = async (markdownContent) => {
  const processedContent = await remark()
    .use(html)
    .process(markdownContent);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
  };
}