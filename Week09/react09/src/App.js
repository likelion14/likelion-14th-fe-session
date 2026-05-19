import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import LoginCheck from './pages/Logincheck';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');

  const login = (email) => {
    setIsAuthenticated(true);
    setEmail(email);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setEmail('');
  };

  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={ 
            isAuthenticated ? ( 
              <Navigate to="/home" replace /> 
            ) : ( 
              <Login />
            )
          }></Route>
          <Route path="/login/check" element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <LoginCheck onLogin={login} />
            )
          }></Route>
          <Route path="/home" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home email={email} />
            </ProtectedRoute>
          }></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function ProtectedRoute({ isAuthenticated, children }) {
  const location = useLocation();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default App;