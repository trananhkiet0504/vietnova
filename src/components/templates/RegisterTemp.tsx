import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import { Spin } from 'antd';

interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  role: 'admin' | 'staff' | 'resident';
}

const RegisterTemp: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: '',
    email: '',
    password: '',
    role: 'resident',
  });

  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Get role from URL query parameter
    const searchParams = new URLSearchParams(location.search);
    const roleFromUrl = searchParams.get('role');
    if (roleFromUrl && ['admin', 'staff', 'resident'].includes(roleFromUrl)) {
      setFormData((prev) => ({
        ...prev,
        role: roleFromUrl as 'admin' | 'staff' | 'resident',
      }));
    }
  }, [location]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/register',
        formData
      );

      const { token, user } = response.data.data;

      if (token && user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user)); // Must include fullName
        navigate('/homepage'); // or redirect to login if needed
      } else {
        setError('Registration successful, but missing user info.');
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message || 'An error occurred during registration'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSignInRedirect = () => {
    switch (formData.role) {
      case 'admin':
        navigate('/admin-login');
        break;
      case 'staff':
        navigate('/staff-login');
        break;
      case 'resident':
      default:
        navigate('/resident-login');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#1E2A5A] to-[#0A122E] p-4 text-white">
      {/* Back */}
      <div
        onClick={() => navigate(-1)}
        className="absolute top-8 left-8 flex cursor-pointer items-center text-gray-300 hover:text-white"
      >
        <FaArrowLeft className="mr-2" />
        <span className="text-lg">Back to Login</span>
      </div>

      {/* Title */}
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-bold mb-2">Create an Account</h1>
        <p className="text-lg text-gray-300">
          Register as a new {formData.role}
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-xl bg-white p-8 text-gray-800 shadow-lg"
      >
        {error && (
          <div className="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full rounded border px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full rounded border px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
            className="w-full rounded border px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="role" className="block text-sm font-bold mb-2">
            Select Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full rounded border px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="resident">Resident</option>
            <option value="staff">Staff</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-blue-600 py-2 font-bold text-white hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <Spin />
            </div>
          ) : (
            'Register'
          )}
        </button>

        <p className="mt-4 text-sm text-center text-gray-700">
          Already have an account?{' '}
          <button
            type="button"
            onClick={handleSignInRedirect}
            className="cursor-pointer font-bold text-blue-500 hover:text-blue-700"
          >
            Sign in
          </button>
        </p>
      </form>

      {/* Footer */}
      <div className="mt-10 text-sm text-gray-300 text-center">
        <p>© 2025 VietNova. All rights reserved.</p>
        <div className="flex gap-4 justify-center mt-2">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            24/7 Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterTemp;
