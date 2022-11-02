import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router/Routes';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-6xl mx-auto'>
   <RouterProvider router={router}></RouterProvider>
   <Toaster />
    </div>
  );
}

export default App;
