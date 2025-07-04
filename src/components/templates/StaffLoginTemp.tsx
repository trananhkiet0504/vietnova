import React, { useState } from 'react';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { showError } from '../../utils/notification';
import { Spin } from 'antd';

const StaffLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    // Validate email
    if (!email) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate password
    if (!password) {
      newErrors.password = 'Please enter your password';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStaffLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth/login/staff',
        {
          email,
          password,
        },
      );

      const token = res.data?.token;
      if (rememberMe) {
        localStorage.setItem('token', token);
      } else {
        sessionStorage.setItem('token', token);
      }

      navigate('/staff-homepage');
    } catch (err: any) {
      showError(err.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#1E2A5A] to-[#0A122E] p-4 text-white'>
      {/* Back to Home */}
      <div 
        onClick={() => navigate('/')}
        className='absolute top-8 left-8 flex cursor-pointer items-center text-gray-300 hover:text-white'
      >
        <FaArrowLeft className='mr-2' />
        <span className='text-lg'>Back to Login</span>
      </div>

      {/* Title */}
      <div className='mb-10 text-center'>
        <h1 className='mb-2 text-5xl font-bold'>Staff Portal</h1>
        <p className='text-lg text-gray-300'>
          Enter your information to access the system
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleStaffLogin}
        className='w-full max-w-sm rounded-xl bg-white p-8 text-gray-800 shadow-lg'
      >
        <div className='mb-4'>
          <label htmlFor='email' className='mb-2 block text-sm font-bold'>
            Email address:
          </label>
          <input
            type='email'
            id='email'
            className={`w-full rounded border px-4 py-2 shadow focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
              errors.email ? 'border-red-500' : ''
            }`}
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) {
                setErrors({ ...errors, email: undefined });
              }
            }}
            required
          />
          {errors.email && (
            <p className='mt-1 text-sm text-red-500'>{errors.email}</p>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='password' className='mb-2 block text-sm font-bold'>
            Password:
          </label>
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              className={`w-full rounded border px-4 py-2 pr-10 shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.password ? 'border-red-500' : ''
              }`}
              placeholder='Enter your password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) {
                  setErrors({ ...errors, password: undefined });
                }
              }}
              required
            />
            <div
              className='absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          {errors.password && (
            <p className='mt-1 text-sm text-red-500'>{errors.password}</p>
          )}
        </div>

        <div className='mb-6 flex items-center justify-between'>
          <label className='flex items-center text-sm'>
            <input
              type='checkbox'
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className='mr-2 h-4 w-4 text-indigo-600'
            />
            Remember me
          </label>
          <a
            href='/forgot-password'
            className='text-sm text-blue-500 hover:text-blue-700'
          >
            Forgot password?
          </a>
        </div>

        <button
          type='submit'
          className='w-full rounded-full bg-blue-600 py-2 font-bold text-white transition hover:bg-blue-700 disabled:opacity-50'
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Spin />
            </div>
          ) : 'Staff Login'}
        </button>

        <p className='mt-4 text-center text-sm text-gray-700'>
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/register?role=staff')}
            className='cursor-pointer font-bold text-blue-500 hover:text-blue-700'
          >
            Register now
          </span>
        </p>
      </form>

      {/* Footer */}
      <div className='mt-10 text-center text-sm text-gray-300'>
        <p>© 2025 VietNova. All rights reserved.</p>
        <div className='mt-2 flex justify-center gap-4'>
          <a href='#' className='hover:underline'>Privacy Policy</a>
          <a href='#' className='hover:underline'>Terms of Use</a>
          <a href='#' className='hover:underline'>24/7 Support</a>
        </div>
      </div>
    </div>
  );
};

export default StaffLogin;
