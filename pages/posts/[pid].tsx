import React from "react";
import DisplayContent from "../../src/components/DisplayContent";
import { findPostBySlug } from "../../src/common";

const SinglePost = ({ pid }: { pid: string }) => {
  const content = findPostBySlug(pid);
  return <DisplayContent content={content} />;
};

export async function getServerSideProps(context: { params: { pid: string } }) {
  const { params } = context;
  const { pid } = params;

  if (!pid) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pid,
    },
  };
}

export default SinglePost;
