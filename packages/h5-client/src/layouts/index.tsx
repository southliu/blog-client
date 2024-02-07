import { useOutlet } from 'react-router-dom';

function Layout() {
  const outlet = useOutlet();

  return (
    <div>
      <div>top</div>
      <div>
        { outlet }
      </div>
      <div>bottom</div>
    </div>
  );
}

export default Layout;