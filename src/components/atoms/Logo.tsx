import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => (
  <Link to="/" className='flex items-center space-x-2'>
    <img 
      src="/logo.png" 
      alt="VietNova Logo" 
      className="h-10 w-auto"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = 'https://via.placeholder.com/40x40?text=VN';
      }}
    />
    <span className='text-xl font-bold text-gray-800'>VietNova</span>
  </Link>
);

export default Logo;