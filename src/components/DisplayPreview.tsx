import React, { useState } from "react";
import { Link } from "@chakra-ui/next-js";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Content } from "../types";
import { calculateReadingTime } from "../common";

const DisplayPreview = ({ content }: { content: Content | undefined }) => {
  if (!content) {
    return null;
  }

  const [state] = useState({
    readingTime: calculateReadingTime(content.data),
  });

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
      <Box padding={4}>
        <Text fontStyle="italic">{tags.map((t) => t).join(", ")}</Text>
      </Box>
      <Text color="gray" fontSize={12}>
        {state.readingTime} MIN READ
      </Text>
    </Box>
  );
};

export default DisplayPreview;
