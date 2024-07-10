import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { Home } from '@/pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='user' element={<h1>Home</h1>} />
      <Route path='store' element={<h1>Home</h1>} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
