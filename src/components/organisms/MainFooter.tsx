import { FC } from 'react';
import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

const MainFooter: FC = () => (
  <footer className='bg-gradient-to-b from-gray-800 to-gray-900 px-6 py-12 text-white'>
    <div className='mx-auto max-w-7xl'>
      {/* Main Content */}
      <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
        {/* Company Info */}
        <div className='space-y-4'>
          <h2 className='text-3xl font-bold text-blue-400'>VietNova</h2>
          <p className='text-gray-300'>
            Creating exceptional living experiences in modern communities
          </p>
          <div className='space-y-2'>
            <div className='flex items-center space-x-2 text-gray-300'>
              <PhoneOutlined className='text-blue-400' />
              <span>+84 123 456 789</span>
            </div>
            <div className='flex items-center space-x-2 text-gray-300'>
              <MailOutlined className='text-blue-400' />
              <span>contact@vietnova.com</span>
            </div>
            <div className='flex items-center space-x-2 text-gray-300'>
              <EnvironmentOutlined className='text-blue-400' />
              <span>123 Luxury Street, District 1, HCMC</span>
            </div>
          </div>
        </div>

        {/* Resident Services */}
        <div>
          <h3 className='mb-4 text-xl font-semibold text-blue-400'>Resident Services</h3>
          <ul className='space-y-3'>
            <li className='cursor-pointer text-gray-300 transition-colors hover:text-blue-400'>
              Report Issues
            </li>
            <li className='cursor-pointer text-gray-300 transition-colors hover:text-blue-400'>
              Book Amenities
            </li>
            <li className='cursor-pointer text-gray-300 transition-colors hover:text-blue-400'>
              Pay Fees
            </li>
            <li className='cursor-pointer text-gray-300 transition-colors hover:text-blue-400'>
              Power/Water Schedule
            </li>
            <li className='cursor-pointer text-gray-300 transition-colors hover:text-blue-400'>
              Vehicle Management
            </li>
            <li className='cursor-pointer text-gray-300 transition-colors hover:text-blue-400'>
              Cleaning Schedule
            </li>
          </ul>
        </div>

        {/* Management Board */}
        <div>
          <h3 className='mb-4 text-xl font-semibold text-blue-400'>Management Board</h3>
          <ul className='space-y-3'>
            <li className='cursor-pointer text-gray-300 transition-colors hover:text-blue-400'>
              About Us
            </li>
            <li className='cursor-pointer text-gray-300 transition-colors hover:text-blue-400'>
              Announcements
            </li>
            <li className='cursor-pointer text-gray-300 transition-colors hover:text-blue-400'>
              Contact
            </li>
            <li className='cursor-pointer text-gray-300 transition-colors hover:text-blue-400'>
              Careers
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className='mb-4 text-xl font-semibold text-blue-400'>Resources</h3>
          <ul className='space-y-3'>
            <li className='cursor-pointer text-gray-300 transition-colors hover:text-blue-400'>
              Resident Guide
            </li>
            <li className='cursor-pointer text-gray-300 transition-colors hover:text-blue-400'>
              Mobile App
            </li>
            <li className='cursor-pointer text-gray-300 transition-colors hover:text-blue-400'>
              FAQ
            </li>
            <li className='cursor-pointer text-gray-300 transition-colors hover:text-blue-400'>
              Technical Support
            </li>
          </ul>
        </div>
      </div>

      {/* Social & Copyright */}
      <div className='mt-12 flex flex-col items-center justify-between border-t border-gray-700 pt-8 md:flex-row'>
        <p className='text-sm text-gray-400'>
          © 2024 VietNova Residence. All rights reserved.
        </p>
        <div className='mt-4 flex space-x-6 md:mt-0'>
          <FacebookOutlined className='cursor-pointer text-2xl text-gray-400 transition-colors hover:text-blue-400' />
          <TwitterOutlined className='cursor-pointer text-2xl text-gray-400 transition-colors hover:text-blue-400' />
          <LinkedinOutlined className='cursor-pointer text-2xl text-gray-400 transition-colors hover:text-blue-400' />
          <InstagramOutlined className='cursor-pointer text-2xl text-gray-400 transition-colors hover:text-blue-400' />
        </div>
      </div>
    </div>
  </footer>
);

export default MainFooter;
