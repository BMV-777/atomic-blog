// import { useContext } from "react";
import { usePosts } from "../PostContext/PostContext.jsx";

import Results from "../Results/Results";
import SearchPosts from "../SearchPosts/SearchPosts";

function Header() {
  const { onClearPosts } = usePosts();
  console.log(onClearPosts);

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header;
