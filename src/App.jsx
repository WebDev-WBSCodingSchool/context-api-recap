import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { Cart, Home, Store, User } from '@/pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='store' element={<Store />} />
      <Route path='cart' element={<Cart />} />
      <Route path='user' element={<User />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
