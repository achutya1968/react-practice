import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My website", body: "lorem ipsum...", author: "Mario", id: 1 },
    { title: "My website", body: "lorem ipsum...", author: "David", id: 2 },
    { title: "My website", body: "lorem ipsum...", author: "Mario", id: 3 },
  ]);



  return (
    <div>
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "David")}
        title="David has a book"
      />
    </div>
  );
};

export default Home;
