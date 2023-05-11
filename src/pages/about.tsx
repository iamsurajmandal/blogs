import React, { Suspense, lazy } from "react";
import type { HeadFC, PageProps } from "gatsby"

const About = lazy(() => import('../components/About'));
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Suspense>
      <About />
      </Suspense>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>About Page</title>