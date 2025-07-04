import { FaBolt, FaBuilding, FaCrown, FaHome } from 'react-icons/fa';

const LoginTemp = () => (
  <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#1E2A5A] to-[#0A122E] p-4 text-white'>
    {/* Main Content */}
    <div className='mb-12 flex flex-col items-center'>
      <div className='mb-4 text-6xl'>
        <FaBuilding />
      </div>
      <h1 className='mb-2 text-5xl font-bold'>VietNova</h1>
      <p className='px-4 text-center text-lg text-gray-300'>
        Smart Condominium Management System - Choose your role to get started
      </p>
    </div>

    {/* Login Cards Container (now links to individual login pages) */}
    <div className='mb-12 flex flex-wrap justify-center gap-8'>
      <a
        href='/admin-login'
        className='flex max-w-sm cursor-pointer flex-col items-center rounded-xl bg-gradient-to-br from-[#E06D8A] to-[#AE4C7F] p-8 text-center shadow-lg transition-transform duration-300 hover:scale-105'
      >
        <div className='mb-4 rounded-full bg-white p-4 text-3xl text-[#AE4C7F]'>
          <FaCrown />
        </div>
        <h2 className='mb-2 text-3xl font-bold'>Administrator</h2>
        <p className='mb-4 text-gray-200'>Full system management rights</p>
        <button className='flex items-center rounded-full bg-white px-8 py-3 text-lg font-semibold text-[#AE4C7F]'>
          <FaCrown className='mr-3' />
          <span>Admin Login</span>
          <span className='ml-3'>&gt;</span>
        </button>
      </a>

      <a
        href='/staff-login'
        className='flex max-w-sm cursor-pointer flex-col items-center rounded-xl bg-gradient-to-br from-[#6D9EE0] to-[#4C7FAE] p-8 text-center shadow-lg transition-transform duration-300 hover:scale-105'
      >
        <div className='mb-4 rounded-full bg-white p-4 text-3xl text-[#4C7FAE]'>
          <FaBolt />
        </div>
        <h2 className='mb-2 text-3xl font-bold'>Staff</h2>
        <p className='mb-4 text-gray-200'>Daily operations management</p>
        <button className='flex items-center rounded-full bg-white px-8 py-3 text-lg font-semibold text-[#4C7FAE]'>
          <FaBolt className='mr-3' />
          <span>Staff Login</span>
          <span className='ml-3'>&gt;</span>
        </button>
      </a>

      <a
        href='/resident-login'
        className='flex max-w-sm cursor-pointer flex-col items-center rounded-xl bg-gradient-to-br from-[#6DE08A] to-[#4CAE7F] p-8 text-center shadow-lg transition-transform duration-300 hover:scale-105'
      >
        <div className='mb-4 rounded-full bg-white p-4 text-3xl text-[#4CAE7F]'>
          <FaHome />
        </div>
        <h2 className='mb-2 text-3xl font-bold'>Resident</h2>
        <p className='mb-4 text-gray-200'>Access personal services</p>
        <button className='flex items-center rounded-full bg-white px-8 py-3 text-lg font-semibold text-[#4CAE7F]'>
          <FaHome className='mr-3' />
          <span>Resident Login</span>
          <span className='ml-3'>&gt;</span>
        </button>
      </a>
    </div>

    {/* Footer */}
    <div className='flex flex-wrap justify-center gap-8 text-sm text-gray-300'>
      <div className='flex items-center'>
        <span className='mr-2 text-blue-400'>🔒</span>
        <span>SSL 256-bit Security</span>
      </div>
      <div className='flex items-center'>
        <span className='mr-2 text-blue-400'>🏢</span>
        <span>500+ Trusted Condominiums</span>
      </div>
      <div className='flex items-center'>
        <span className='mr-2 text-yellow-400'>⭐</span>
        <span>5 Star Rating</span>
        <span className='ml-1 text-yellow-400'>⭐</span>
        <span>from Customers</span>
      </div>
    </div>
  </div>
);

export default LoginTemp;
