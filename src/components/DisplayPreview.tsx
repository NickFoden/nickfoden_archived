import { Box, Heading, Text } from "@chakra-ui/react";
import { Content } from "../types";
import { Link } from "@chakra-ui/next-js";

const DisplayPreview = ({ content }: { content: Content | undefined }) => {
  if (!content) {
    return null;
  }
  const { slug, tags, title, thumbNail } = content;
  return (
    <Box display="flex" flexDirection="column">
      <Link href={`/posts/${slug}`}>
        <Box maxW={200}>
          <img src={thumbNail} alt={title} />
        </Box>
      </Link>
      <Link href={`/posts/${slug}`}>
        <Heading>{title}</Heading>
      </Link>
      <Text>{tags.map((t) => t).join(", ")}</Text>
    </Box>
  );
};

export default DisplayPreview;
