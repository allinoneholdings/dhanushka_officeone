import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterSideImg from '../../assets/RegisterSideImg.jpg';

export default function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const apiBase = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    let endpoint = '';
    if (role === 'customer') endpoint = '/login/customer';
    else if (role === 'admin') endpoint = '/login/superadmin';
    else if (role === 'staff') endpoint = '/login/staff';
    try {
      const requestBody = role === 'customer' 
        ? { emailAddress: email, password }
        : { userName: email, password };
      
      const res = await fetch(`${apiBase}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');
      if (data.token) {
        localStorage.setItem('token', data.token);
        if (role === 'customer') navigate('/customer');
        else navigate('/admin');
      } else {
        throw new Error('No token received');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-50 to-white py-8 px-2">
      <div className="flex flex-col md:flex-row shadow-2xl rounded-3xl overflow-hidden bg-white/90 max-w-4xl w-full">
        {/* Left: Image */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-indigo-200 to-blue-200 items-center justify-center p-8">
          <img
            src={RegisterSideImg}
            alt="Register illustration"
            className="w-full h-auto max-h-96 object-cover rounded-2xl shadow-lg border-4 border-white/60"
          />
        </div>
        {/* Right: Login Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12">
          {/* Logo or Title */}
          <div className="flex flex-col items-center mb-6">
            <span className="inline-block bg-indigo-100 rounded-full p-3 mb-2">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#6366f1"/><path d="M8 13l2.5 2.5L16 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <h2 className="text-3xl font-extrabold text-blue-900 tracking-tight">Sign in to your account</h2>
            <p className="text-sm text-blue-500 mt-1">Welcome back! Please enter your details.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-blue-900 mb-1">
                Role Type
              </label>
              <select
                id="role"
                name="role"
                required
                value={role}
                onChange={e => setRole(e.target.value)}
                className="block w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-base text-blue-950 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
              >
                <option value="customer">Customer</option>
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
                required
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="block w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-base text-blue-950 placeholder:text-blue-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-blue-900 mb-1">
                  Password
                </label>
                <a href="#" className="text-xs font-semibold text-indigo-400 hover:text-indigo-600 transition">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                required
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="block w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-base text-blue-950 placeholder:text-blue-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
              />
            </div>
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold text-lg shadow-md hover:from-indigo-600 hover:to-blue-600 transition disabled:opacity-60"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="/register" className="font-semibold text-indigo-600 hover:text-indigo-400 transition">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}