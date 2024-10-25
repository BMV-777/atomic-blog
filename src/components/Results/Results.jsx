// import { useContext } from "react";

import { usePosts } from "../PostContext/PostContext.jsx";

function Results() {
  const { posts } = usePosts();

  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
