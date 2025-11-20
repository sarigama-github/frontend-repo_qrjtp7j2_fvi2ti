import React, { useState } from 'react';
import Landing from './components/Landing';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const [screen, setScreen] = useState('landing');
  const [user, setUser] = useState(null);

  const handleGetStarted = () => setScreen('login');
  const handleLoginSuccess = (u) => { setUser(u); setScreen('dashboard'); };
  const handleLogout = () => { setUser(null); setScreen('landing'); };

  return (
    <div className="font-inter min-h-screen">
      {screen === 'landing' && <Landing onGetStarted={handleGetStarted} />}
      {screen === 'login' && <Login onSuccess={handleLoginSuccess} onBack={() => setScreen('landing')} />}
      {screen === 'dashboard' && <Dashboard user={user} onLogout={handleLogout} />}
    </div>
  );
};

export default App;
