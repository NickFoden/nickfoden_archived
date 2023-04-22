import { Posts } from "../content";

export const findPostBySlug = (slug: string) =>
  Posts.find((post) => post.slug === slug);
