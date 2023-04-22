import { Content } from "../types";

export const Posts: Content[] = [
  {
    data: [
      {
        alt: "",
        type: "image",
        src: "/img/nodejs.png",
      },
      {
        type: "p",
        text: "This blog has been collecting dust and I’ve been meaning to get back to it for a while, it is deployed with node 12 :-) and gatsby/a ghost template. Moving to next + mdx + node18 and chakra will be fun and a stack closer to what i use day to day.",
      },
    ],
    date: "2023-04-13",
    slug: "node-18",
    status: "published",
    thumbNail: "/img/nodejs.png",
    title: "Node 18 time",
    tags: ["nodeJs"],
  },
];
