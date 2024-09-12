import { useContext } from "react";
import { PostContext } from "../../App";

import Results from "../Results/Results";
import SearchPosts from "../SearchPosts/SearchPosts";

function Header() {
  const { onClearPosts } = useContext(PostContext);
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
