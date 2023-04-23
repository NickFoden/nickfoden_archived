import React from "react";
import { findPostBySlug } from "../src/common";
import DisplayContent from "../src/components/DisplayContent";
import { Content } from "../src/types";

const about = () => {
  const content: Content = {
    title: "About",
    date: "",
    slug: "about",
    data: [
      {
        alt: "About Page",
        type: "image",
        src: "/img/nickfoden.jpg",
      },
      {
        type: "p",
        text: "Born and raised in Mountain View, CA (Before google took over the town), I went to html summer camps at Stanford as a kid and I have always been messing around on computers. I attended college in San Francisco, and after college I moved to NYC to be closer to family. I started working with an architectural design firm and absorbed more and more of their IT and accounting workload, enabling the firm to let go of IT contracts and consolidate their backend needs.",
      },
      {
        type: "p",
        text: "In 2015, I was getting tired of consuming so many faulty websites and apps and kept seeing the limitations of the app or places where I wanted to tweak the app. Some times a small part of the design or other times want to add more robust features or want to even totally redo the app entirely. I wanted to really start creating and contributing, so I started to take MOOC's and follow various tutorials working mainly with Python and Ruby, building various projects, a sandwich tracker and some other small projects, but the magic was hidden behind gems and I wanted to really get into the nitty gritty, end of 2016 decided to take a bigger step, kick this thing into gear for real. I went through a full stack javascript boot camp program where I was paired with a senior developer(10+years experience) as a mentor to work on the MERN stack.",
      },
      {
        type: "p",
        text: "I have focused mainly on React and Node while working for companies of all sizes. Startups getting traction (product changing by the minute) to enterprise (Largest Healthcare company in US). Like anything there is tradeoffs, I enjoy the smaller company experience where the team is more nimble and can adopt new technologies, and also enjoy the enterprise work where we have a million active monthly users and managing volume efficiently is paramount.",
      },
      {
        type: "p",
        text: "My coding style is writing predictable maintainable code with high % of test coverage. I leverage descriptive naming and uniform syntax/consistency across files and folder organization. If there is a lack of order when I land in a new code base, you will find me chipping away/refactoring for uniform structure in my downtime. I have refactored code bases where props are renamed multiple times during prop drilling, where nested ternaries had become the norm and css specificity had run amuck with 10,000+ loc css files. Working in large code bases, I feel strongly about not compromising on uniform syntax, uniform structure and descriptive naming. The goal is to be able to jump in get oriented add a feature/make the change, add tests and ship ship ship.",
      },
      {
        type: "p",
        text: "When I'm not javascripting away or expanding my knowledge of Rust and Golang, you can find me rescuing animals with Unwanted NYC Pets, and cycling or running around NYC. To be honest I don't particularly enjoy writing own bios much. If you got this far I'll take you out for Banh Mi or a beer or who knows, heck I'll even help you move apartments if you need it. Hit me up !",
      },
    ],
    status: "published",
    tags: ["about", "life", "thoughts"],
    thumbNail: "/img/nickfoden.jpg",
  };
  return <DisplayContent content={content} />;
};

export default about;
