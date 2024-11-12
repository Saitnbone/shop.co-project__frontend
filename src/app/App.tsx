import './App.css';
import { Header } from '@/widgets/header';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
