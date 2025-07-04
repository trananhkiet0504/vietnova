import React from 'react';
import { BellOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Avatar, Dropdown, Menu, Badge } from 'antd';
import { useNavigate } from 'react-router-dom';

const menuItems = ['Dashboard', 'Residents', 'Maintenance', 'Staff'];

const HeaderStaff: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    navigate('/staff-login');
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="settings">Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" onClick={handleLogout}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-between bg-white px-6 shadow-sm border-b">
      {/* Left - Nav Items */}
      <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            className={`hover:text-blue-600 transition-colors ${item === 'Staff' ? 'text-black font-semibold' : ''}`}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Center - Search */}
      <div className="hidden md:flex items-center flex-1 justify-center px-6">
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search..."
          className="max-w-sm rounded-full"
        />
      </div>

      {/* Right - Notifications and User */}
      <div className="flex items-center gap-4">
        <Badge count={3} size="small">
          <BellOutlined className="text-xl text-gray-600 hover:text-blue-600 cursor-pointer" />
        </Badge>

        <Dropdown overlay={userMenu} placement="bottomRight">
          <div className="flex items-center cursor-pointer space-x-2">
            <Avatar size="small" icon={<UserOutlined />} />
            <span className="text-sm font-medium text-gray-800 hidden sm:inline">Staff</span>
          </div>
        </Dropdown>
      </div>
    </header>
  );
};

export default HeaderStaff; 