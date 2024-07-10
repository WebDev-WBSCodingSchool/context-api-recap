import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { Home, Store } from '@/pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='user' element={<h1>Home</h1>} />
      <Route path='store' element={<Store />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
