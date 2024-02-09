// import { useNavigate } from "react-router-dom";
import BlogList from "./components/BlogList";
import CategoryList from "./components/CategoryList";
import BlogRight from "./components/BlogRight";

function BlogPage() {
  // const navigate = useNavigate();

  // const

  return (
    <div className="flex justify-between pt-40px">
      <CategoryList />
      <BlogList />
      <BlogRight />
    </div>
  );
}

export default BlogPage;