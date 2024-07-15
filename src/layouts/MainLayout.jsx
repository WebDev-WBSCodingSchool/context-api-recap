import { Navbar } from '@/components';
import { CartProvider, LocalisationProvider } from '@/context';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <LocalisationProvider>
      <CartProvider>
        <Navbar />
        <main className='container mx-auto'>
          <Outlet />
        </main>
      </CartProvider>
    </LocalisationProvider>
  );
};

export default MainLayout;
