// import { useState } from "react";
import Counter from "./features/counter/Counter";
import "./App.css";
import PostsList from "./features/posts/PostsList";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <main>
      {/* <Counter /> */}
      <PostsList />
    </main>
  );
}

export default App;
