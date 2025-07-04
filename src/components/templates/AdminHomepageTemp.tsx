import React from 'react';
import { Card, Statistic, Avatar, Badge, Button } from 'antd';
import {
  DollarOutlined,
  HomeOutlined,
  ToolOutlined,
  UserOutlined,
  CalendarOutlined,
  ExclamationCircleOutlined,
  DownloadOutlined
} from '@ant-design/icons';
import AdminHeader from '../organisms/HeaderAdmin';

const AdminHomepageTemp: React.FC = () => {
  const stats = [
    {
      title: 'Total Units',
      value: 120,
      suffix: '98% occupied',
      color: 'text-green-600',
      icon: <HomeOutlined className="text-xl" />,
    },
    {
      title: 'Maintenance Requests',
      value: 12,
      suffix: '+3 since yesterday',
      color: 'text-orange-500',
      icon: <ToolOutlined className="text-xl" />,
    },
    {
      title: 'Monthly Revenue',
      value: '$120,500',
      suffix: '+2% from last month',
      color: 'text-blue-600',
      icon: <DollarOutlined className="text-xl" />,
    },
    {
      title: 'Vacant Units',
      value: 3,
      suffix: '-2 from last month',
      color: 'text-purple-500',
      icon: <HomeOutlined className="text-xl" />,
    },
  ];

  const activities = [
    { name: 'John Doe', type: 'Maintenance', message: 'Submitted a maintenance request for plumbing issues', time: '2h ago' },
    { name: 'Maria Smith', type: 'Payment', message: 'Paid monthly rent of $1,250', time: '5h ago' },
    { name: 'Robert Johnson', type: 'Lease', message: 'Signed new lease agreement for Unit C310', time: '1d ago' },
    { name: 'Lisa Wong', type: 'Request', message: 'Requested parking permit for additional vehicle', time: '2d ago' },
  ];

  const quickStats = [
    { label: 'New Residents', value: 5, icon: <UserOutlined /> },
    { label: 'Lease Renewals', value: 12, icon: <HomeOutlined /> },
    { label: 'Pending Approvals', value: 3, icon: <ExclamationCircleOutlined /> },
    { label: 'Urgent Repairs', value: 2, icon: <ToolOutlined /> },
  ];

  const events = [
    { date: 'JUN 15', title: 'Community Meeting', time: '7:00 PM - Community Hall' },
    { date: 'JUN 18', title: 'Pool Maintenance', time: '9:00 AM - 5:00 PM' },
    { date: 'JUN 20', title: 'Rent Due Reminder', time: 'Automated notifications' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <AdminHeader />
      <div className="mb-6 mt-16 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500">Welcome back, Admin. Here's what's happening today.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-700">
            <CalendarOutlined />
            <span>June 12, 2025</span>
          </div>
          <Button type="primary" icon={<DownloadOutlined />}>
            Download Report
          </Button>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <Card key={idx}>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <h2 className={`text-2xl font-bold ${stat.color}`}>{stat.value}</h2>
                <p className="text-xs text-gray-400">{stat.suffix}</p>
              </div>
              <div className="text-gray-400">{stat.icon}</div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <Card title="Recent Activities" extra={<Button type="link">View All</Button>}>
          {activities.map((act, idx) => (
            <div key={idx} className="mb-4 flex items-start">
              <Avatar className="mr-3" icon={<UserOutlined />} />
              <div>
                <div className="text-sm font-medium">
                  {act.name}{' '}
                  <span className="ml-2 rounded bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    {act.type}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{act.message}</p>
                <p className="text-xs text-gray-400">{act.time}</p>
              </div>
            </div>
          ))}
        </Card>

        {/* Quick Stats */}
        <Card title="Quick Stats" className="lg:col-span-1">
          <div className="grid grid-cols-2 gap-4">
            {quickStats.map((qs, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded bg-gray-100 p-3"
              >
                <Avatar size="small" icon={qs.icon} className="bg-white text-blue-500" />
                <div>
                  <p className="text-xs text-gray-500">{qs.label}</p>
                  <p className="text-sm font-bold text-gray-800">{qs.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming Events */}
        <Card title="Upcoming Events" className="lg:col-span-1">
          {events.map((evt, idx) => (
            <div key={idx} className="mb-4">
              <p className="text-xs font-medium text-gray-400">{evt.date}</p>
              <p className="text-sm font-bold text-gray-800">{evt.title}</p>
              <p className="text-xs text-gray-500">{evt.time}</p>
            </div>
          ))}
          <Button type="link">View Calendar</Button>
        </Card>
      </div>
    </div>
  );
};

export default AdminHomepageTemp;