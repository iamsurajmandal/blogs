import React, { Suspense, lazy } from "react";
import type { HeadFC, PageProps } from "gatsby"

const Home = lazy(() => import('../components/Home'));
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Suspense>
      <Home />
      </Suspense>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
