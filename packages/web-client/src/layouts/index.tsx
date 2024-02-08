import { useOutlet } from 'react-router-dom';
import Header from './components/Header';
import { Footer } from '@south-blog/components';

function Layout() {
  const outlet = useOutlet();

  return (
    <div>
      <Header />
      <div className='bg-#f5f6f9 h-1000px'>
        { outlet }
      </div>
      <Footer />
    </div>
  );
}

export default Layout;