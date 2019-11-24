import React from "react";
import { Slide, Text, Heading } from "spectacle";
import { MDXProvider } from "@mdx-js/tag";
import components from "./components";
import theme from "./theme";

// DEFAULT LAYOUT

export const DefaultSlide = ({ children, ...rest }) => (
  <Slide {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);

// DARK LAYOUT

const darkComponents = {
  ...components,
  h1: ({ children }) => (
    <Heading size={1} textAlign={"left"}>
      {children}
    </Heading>
  ),
  p: ({ children }) => <Text textColor="white">{children}</Text>
};

export const DarkSlide = ({ children, ...rest }) => (
  <Slide textAlign={"left"}>
    <MDXProvider components={darkComponents}>{children}</MDXProvider>
  </Slide>
);

// CODE LAYOUT

export const CodeSlide = ({ children, ...rest }) => (
  <Slide bgColor="#1d1f21" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);
