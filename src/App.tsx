import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LoadingProvider, useLoading } from './contexts/LoadingContext';

import AdminLogin from './components/pages/AdminLogin.tsx';
import Homepage from './components/pages/Homepage.tsx';
import Login from './components/pages/Login.tsx';
import Register from './components/pages/Register.tsx';
import ResidentLogin from './components/pages/ResidentLogin.tsx';
import StaffLogin from './components/pages/StaffLogin.tsx';
import AdminHomepage from './components/pages/AdminHomepage.tsx';
import StaffHomepage from './components/pages/StaffHomepage.tsx';
import ServicesHomepage from './components/pages/ServicesHomepage.tsx';

const RouteChangeHandler = () => {
  const location = useLocation();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Minimum loading time of 500ms

    return () => clearTimeout(timer);
  }, [location, setIsLoading]);

  return null;
};

function App() {
  return (
    <Router>
      <LoadingProvider>
        <RouteChangeHandler />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/admin-homepage' element={<AdminHomepage />} />
          <Route path='/staff-homepage' element={<StaffHomepage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/staff-login' element={<StaffLogin />} />
          <Route path='/resident-login' element={<ResidentLogin />} />
          <Route path='/services-homepage' element={<ServicesHomepage />} />
        </Routes>
      </LoadingProvider>
    </Router>
  );
}

export default App;
