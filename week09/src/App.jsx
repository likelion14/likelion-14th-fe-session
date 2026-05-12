import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome'
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

// 인증되지 않은 사용자가 접근하면 즉시 로그인 페이지로 돌려보냄
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // replace 속성 - 브라우저의 뒤로 가기 기록에 남기지 않도록 함
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />}
        />

        <Route path="*" element={<NotFound />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;