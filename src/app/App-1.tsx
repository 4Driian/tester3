import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from 'sonner';
import '../styles/fonts.css';
import '../styles/theme.css';

export default function App() {
  return (
    <>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </>
  );
}
