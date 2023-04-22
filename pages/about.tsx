import React from "react";
import { findPostBySlug } from "../src/common";
import DisplayContent from "../src/components/DisplayContent";

const about = () => {
  const content = findPostBySlug("about");
  return <DisplayContent content={content} />;
};

export default about;
