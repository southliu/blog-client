import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <p className="text-red">
        HomePage
      </p>
      <div className='cursor-pointer' onClick={() => navigate('/demo')}>
        go demo
      </div>
    </>
  );
}

export default HomePage;