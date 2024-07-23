
import { RouterProvider,Outlet,createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Academics from './pages/Academics';
import About from './pages/About';
import Admission from './pages/Admission';
import Contact from './pages/Contact';
import Students from './pages/Students';
import Faculty from './pages/Faculty';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Footer from './components/Footer';

const Layout = () => {  
  return (
    <div>
      <NavBar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Wrap all routes with Layout
    children: [
      { index: true, element: <Home /> }, // Default route
      { path: 'about', element: <About /> },
      { path: 'academics', element: <Academics /> },
      { path: 'admission', element: <Admission /> },
      { path: 'students', element: <Students /> },
      { path: 'faculty', element: <Faculty /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
