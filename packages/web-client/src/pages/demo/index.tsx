import { useNavigate } from 'react-router-dom';

function DemoPage() {
  const navigate = useNavigate();

  return (
    <>
      <p className="text-red">
        DemoPage
      </p>
      <div className='cursor-pointer' onClick={() => navigate('/home')}>
        go Home
      </div>
    </>
  );
}

export default DemoPage;