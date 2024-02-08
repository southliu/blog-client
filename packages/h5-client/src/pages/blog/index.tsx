import { useNavigate } from "react-router-dom";

function BlogPage() {
  const navigate = useNavigate();

  return (
    <>
      <p className="text-red">
        BlogPage
      </p>
      <div className='cursor-pointer' onClick={() => navigate('/demo')}>
        go demo
      </div>
    </>
  );
}

export default BlogPage;