import React, { useState } from 'react';

const DEFAULT_EMAIL = 'sanketg367@gmail.com';
const DEFAULT_PASS = 'pass@123';

const Login = ({ onSuccess, onBack }) => {
  const [email, setEmail] = useState(DEFAULT_EMAIL);
  const [password, setPassword] = useState(DEFAULT_PASS);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === DEFAULT_EMAIL && password === DEFAULT_PASS) {
      setError('');
      onSuccess({ email });
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50 flex items-center justify-center px-5">
      <div className="w-full max-w-sm p-6 bg-white rounded-3xl shadow-xl border border-red-100">
        <button onClick={onBack} className="text-sm text-red-600 hover:underline">← Back</button>
        <h2 className="mt-2 text-2xl font-bold text-red-600">Welcome back</h2>
        <p className="text-sm text-gray-500">Use the demo account to continue</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-red-500"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-red-500"
              type="password"
              placeholder="••••••••"
            />
          </div>
          {error && <div className="text-sm text-red-600">{error}</div>}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-red-600 text-white font-semibold active:scale-[0.98] transition"
          >
            Continue
          </button>
          <div className="text-xs text-gray-500">Demo: {DEFAULT_EMAIL} / {DEFAULT_PASS}</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
