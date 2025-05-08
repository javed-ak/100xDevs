import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

const Landing = React.lazy(() => import('./components/Landing'))
const Dashboard = React.lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <BrowserRouter>
    <AppBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

const AppBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>Landing</button>
      <button onClick={() => navigate('/dashboard')}>Dashboard</button>
    </div>
  )
}

export default App
