import React from 'react';
import { Menu } from 'antd';

const Navigation: React.FC = () => (
  <Menu 
    mode='horizontal' 
    className='navigation-menu border-none bg-transparent'
    items={[
      {
        key: 'home',
        label: 'Introduction',
        className: 'text-gray-700 hover:text-blue-500 font-medium'
      },
      {
        key: 'services',
        label: 'Services',
        className: 'text-gray-700 hover:text-blue-500 font-medium'
      },
      {
        key: 'features',
        label: 'Features',
        className: 'text-gray-700 hover:text-blue-500 font-medium'
      },
      {
        key: 'reviews',
        label: 'Reviews',
        className: 'text-gray-700 hover:text-blue-500 font-medium'
      },
      {
        key: 'contact',
        label: 'Contact',
        className: 'text-gray-700 hover:text-blue-500 font-medium'
      }
    ]}
  />
);

export default Navigation;