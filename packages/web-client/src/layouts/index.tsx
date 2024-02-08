import { useOutlet } from 'react-router-dom';
import { Footer } from '@south-blog/components';
import Header from './components/Header';

function Layout() {
  const outlet = useOutlet();

  return (
    <div>
      <Header />
      <div className='bg-#f5f6f9'>
        <div className='mx-15vw h-1000px'>
          { outlet }
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;