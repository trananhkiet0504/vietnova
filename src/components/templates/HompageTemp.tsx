import { FC, useState } from 'react';
import { Input, Layout, Menu, Select, Tabs } from 'antd';
import { motion } from 'framer-motion';
import ServicesHomepageTemp from './ServicesHomepageTemp';

import Banner from '../organisms/Banner';
import HeaderHomepage from '../organisms/HeaderHomepage';
import MainFooter from '../organisms/MainFooter';

const { Content, Sider } = Layout;
const { Search } = Input;

const HompageTemplate: FC = () => {
  const [activeTab, setActiveTab] = useState('apartments');

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <Layout className='flex min-h-screen flex-col'>
      <HeaderHomepage />

      {/* Content */}
      <Content
        style={{ padding: '0 48px', backgroundColor: 'white' }}
        className='flex-1 mt-20'
      >
        <div className='border-b border-gray-300'>
          <Banner />
        </div>

        <Layout>
          {/* Filter Sidebar */}
          <Sider width={280} className='border-r border-gray-200 bg-white p-4'>
            <h2 className='mb-4 text-lg font-bold'>Filters</h2>
            <Menu mode='inline'>
              <Menu.SubMenu key='building' title='Building'>
                <Menu.Item key='1'>Tower A</Menu.Item>
                <Menu.Item key='2'>Tower B</Menu.Item>
                <Menu.Item key='3'>Tower C</Menu.Item>
                <Menu.Item key='4'>Tower D</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key='apartmentType' title='Apartment Type'>
                <Menu.Item key='5'>Studio</Menu.Item>
                <Menu.Item key='6'>1 Bedroom</Menu.Item>
                <Menu.Item key='7'>2 Bedrooms</Menu.Item>
                <Menu.Item key='8'>3 Bedrooms</Menu.Item>
                <Menu.Item key='9'>Duplex</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key='status' title='Status'>
                <Menu.Item key='10'>Available</Menu.Item>
                <Menu.Item key='11'>Rented</Menu.Item>
                <Menu.Item key='12'>Under Maintenance</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key='price' title='Price Range'>
                <Menu.Item key='13'>Under $200</Menu.Item>
                <Menu.Item key='14'>$200 - $400</Menu.Item>
                <Menu.Item key='15'>$400 - $600</Menu.Item>
                <Menu.Item key='16'>Above $600</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key='area' title='Area'>
                <Menu.Item key='17'>Under 50m²</Menu.Item>
                <Menu.Item key='18'>50 - 70m²</Menu.Item>
                <Menu.Item key='19'>70 - 100m²</Menu.Item>
                <Menu.Item key='20'>Above 100m²</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>

          <Content className='p-6'>
            <Tabs
              defaultActiveKey='apartments'
              onChange={handleTabChange}
              className='mb-4'
              activeKey={activeTab}
            >
              <Tabs.TabPane tab='Apartments' key='apartments' />
              <Tabs.TabPane tab='Services' key='services' />
              <Tabs.TabPane tab='Maintenance' key='maintenance' />
              <Tabs.TabPane tab='Residents' key='residents' />
            </Tabs>

            {/* Search and Filter Bar */}
            <div className='mb-6 flex items-center gap-4'>
              <Search
                placeholder='Search apartments...'
                className='w-96'
                allowClear
              />
              <Select
                placeholder='Sort by'
                className='w-40'
                options={[
                  { value: 'price_asc', label: 'Price: Low to High' },
                  { value: 'price_desc', label: 'Price: High to Low' },
                  { value: 'area_asc', label: 'Area: Small to Large' },
                  { value: 'area_desc', label: 'Area: Large to Small' },
                ]}
              />
            </div>

            {/* Content Display Area */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='min-h-[600px]'
            >
              {activeTab === 'apartments' && (
                <div></div>
              )}
              {activeTab === 'services' && (
                <ServicesHomepageTemp />
              )}
              {activeTab === 'maintenance' && (
                <div></div>
              )}
              {activeTab === 'residents' && (
                <div></div>
              )}
            </motion.div>
          </Content>
        </Layout>
      </Content>

      {/* Footer */}
      <MainFooter />
    </Layout>
  );
};

export default HompageTemplate;
