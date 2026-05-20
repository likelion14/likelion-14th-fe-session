import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Welcome from './pages/Welcome';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />}
        />
        <Route
          path="/welcome"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Welcome />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
