import Footer from "./Footer";
import Helmet from "./Helmet";
import Navbar from "./Navbar";
import React, { ReactNode } from "react";
import styled from "styled-components";

const Root = styled.div`
  ${({ background }) => background && `background: ${background}`};
`;

type PageWrapperProps = {
  children: ReactNode,
  title: string,
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children, title }) => (
  <Root>
    <head>
      <title>{title}</title>
      <Helmet />
      <Navbar />
    </head>
    <main>{children}</main>
    <Footer />
  </Root>
);

export default PageWrapper;
