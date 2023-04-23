import { Posts } from "../content";
import { ContentItem } from "../types";

export const findPostBySlug = (slug: string) =>
  Posts.find((post) => post.slug === slug);

export const calculateReadingTime = (contentItems: ContentItem[]) => {
  let words = 0;

  contentItems.forEach((item) => {
    if (item.type !== "image" && item.text) {
      words += item.text.trim().split(" ").length;
    }
  });

  return Math.ceil(words / 200);
};
