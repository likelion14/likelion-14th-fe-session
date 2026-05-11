import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DiaryProvider } from './contexts/DiaryContext';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px'
  };

  const headerBoxStyle = {
    border: '3px solid #ff8800', 
    borderRadius: '30px',
    padding: '10px 40px',
    display: 'inline-block',
    margin: '40px auto',
    textAlign: 'center'
  };

  return (
    <DiaryProvider>
      <Router>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center' }}>
            <div style={headerBoxStyle}>
              <h1 style={{ margin: 0, fontSize: '2.5rem' }}>기분 일기장 SPA</h1>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
            
            <div style={{ flex: 1.5 }}>
              <Home />
            </div>

            <div style={{ flex: 1, minHeight: '300px' }}>
              <Routes>
                <Route path="/detail/:id" element={<Detail />} />
             
              </Routes>
            </div>

          </div>
        </div>
      </Router>
    </DiaryProvider>
  );
}

export default App;