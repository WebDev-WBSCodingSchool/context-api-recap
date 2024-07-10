import { Link, NavLink, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <header className='bg-base-300'>
        <div className='container mx-auto navbar'>
          <div className='flex-1'>
            <Link to='/' className='btn btn-ghost text-xl'>
              Coffee &amp; Co
              <span role='img' aria-label='coffee'>
                ☕
              </span>
            </Link>
          </div>
          <nav className='flex-none'>
            <ul className='menu menu-horizontal px-1'>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/user'>User</NavLink>
              </li>
              <li>
                <NavLink to='/store'>Store</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className='container mx-auto'>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
