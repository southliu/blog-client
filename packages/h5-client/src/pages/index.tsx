import { useNavigate } from "react-router-dom";

function IndexPage() {
  const navigate = useNavigate();

  return (
    <>
      <p className="text-red">
        IndexPage
      </p>
      <div className='cursor-pointer' onClick={() => navigate('/demo')}>
        go demo
      </div>
    </>
  );
}

export default IndexPage;