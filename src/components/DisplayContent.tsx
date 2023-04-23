import Head from "next/head";
import { useRouter } from "next/router";
import { Link } from "@chakra-ui/next-js";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Content } from "../types";

const DisplayContent = ({ content }: { content: Content | undefined }) => {
  const router = useRouter();

  if (!content) {
    router.push("/");
    return <div>Not found</div>;
  }

  const { date, data, slug, thumbNail, title } = content;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box display="flex" flexDirection="column">
        <Box
          display="flex"
          flexDirection="column"
          margin="32px auto 0"
          maxW="90vw"
        >
          <Heading>{title}</Heading>
          <Text textAlign="center">{date}</Text>
        </Box>
        <Box marginTop={8}>
          {data.map((item, index) => {
            if (item.type === "image") {
              return (
                <Box maxW={300} margin="0 auto 8px">
                  <img src={item.src} alt={item.alt} key={index} />
                </Box>
              );
            }
            if (item.type === "p") {
              return (
                <Box maxW={500} margin="0 auto 8px">
                  <Text key={index}>{item.text}</Text>
                </Box>
              );
            }
          })}
        </Box>
        <Box margin="0 auto">
          <Link color="cornflowerblue" href="/" textDecoration="underline">
            Back to Home
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default DisplayContent;
