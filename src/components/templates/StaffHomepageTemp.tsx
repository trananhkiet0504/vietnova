import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Input, Tabs, Avatar, Select, Table, Tag } from 'antd';
import {
  UsergroupAddOutlined, CalendarOutlined, SolutionOutlined, TeamOutlined,
  HomeOutlined, ToolOutlined, DollarOutlined, ExclamationCircleOutlined,
  PlusOutlined, SearchOutlined, SafetyOutlined, ReadOutlined, EditOutlined, UserOutlined,
  SwapOutlined, PlusCircleOutlined, CheckCircleOutlined, SyncOutlined,
} from '@ant-design/icons';
import HeaderStaff from '../organisms/HeaderStaff';

const { TabPane } = Tabs;
const { Option } = Select;

const StaffHomepageTemp = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: 'Total Staff',
      value: 24,
      suffix: '+2 new hires this month',
      color: 'text-green-600',
      icon: <UsergroupAddOutlined />,
      border: 'border-l-4 border-green-500',
    },
    {
      title: 'On Duty Today',
      value: 18,
      suffix: '75% attendance rate',
      color: 'text-yellow-500',
      icon: <CalendarOutlined />,
      border: 'border-l-4 border-yellow-500',
    },
    {
      title: 'Pending Reviews',
      value: 5,
      suffix: 'Performance evaluations due',
      color: 'text-orange-500',
      icon: <SolutionOutlined />,
      border: 'border-l-4 border-orange-500',
    },
    {
      title: 'Open Positions',
      value: 3,
      suffix: 'Actively recruiting',
      color: 'text-purple-500',
      icon: <TeamOutlined />,
      border: 'border-l-4 border-purple-500',
    },
  ];

  const staffData = [
    { id: 'STF-001', name: 'Carlos Rodriguez', department: 'Maintenance', role: 'Maintenance Supervisor', shift: 'morning', status: 'active', hireDate: '15/3/2021', salary: '$45.000' },
    { id: 'STF-002', name: 'Sarah Johnson', department: 'Security', role: 'Security Guard', shift: 'night', status: 'active', hireDate: '10/1/2022', salary: '$35.000' },
    { id: 'STF-003', name: 'Mike Chen', department: 'Maintenance', role: 'Electrician', shift: 'morning', status: 'active', hireDate: '22/8/2020', salary: '$42.000' },
    { id: 'STF-004', name: 'Lisa Thompson', department: 'Administration', role: 'Property Manager', shift: 'flexible', status: 'active', hireDate: '1/5/2019', salary: '$55.000' },
    { id: 'STF-005', name: 'David Park', department: 'Cleaning', role: 'Cleaning Supervisor', shift: 'morning', status: 'active', hireDate: '15/11/2021', salary: '$38.000' },
    { id: 'STF-006', name: 'Maria Garcia', department: 'Security', role: 'Security Guard', shift: 'afternoon', status: 'on-leave', hireDate: '20/6/2022', salary: '$35.000' },
    { id: 'STF-007', name: 'James Wilson', department: 'Maintenance', role: 'Plumber', shift: 'morning', status: 'active', hireDate: '10/9/2021', salary: '$40.000' },
    { id: 'STF-008', name: 'Anna Lee', department: 'Administration', role: 'Leasing Agent', shift: 'flexible', status: 'active', hireDate: '14/2/2022', salary: '$38.000' },
  ];

  const departmentOverview = [
    { name: 'Maintenance', employees: 8, icon: <ToolOutlined className="text-blue-500" /> },
    { name: 'Security', employees: 6, icon: <SafetyOutlined className="text-red-500" /> },
    { name: 'Administration', employees: 5, icon: <ReadOutlined className="text-green-500" /> },
    { name: 'Cleaning', employees: 5, icon: <EditOutlined className="text-purple-500" /> },
  ];

  const maintenanceRequests = [
    { id: 'REQ-001', subject: 'Rò rỉ nước ở phòng tắm', resident: 'Nguyễn Văn A', unit: 'A101', status: 'pending', date: '2024-07-20' },
    { id: 'REQ-002', subject: 'Điều hòa không mát', resident: 'Trần Thị B', unit: 'B205', status: 'in-progress', date: '2024-07-19' },
    { id: 'REQ-003', subject: 'Sửa đèn hành lang', resident: 'Lê Văn C', unit: 'Common Area', status: 'completed', date: '2024-07-18' },
  ];

  const maintenanceColumns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Chủ đề', dataIndex: 'subject', key: 'subject' },
    { title: 'Cư dân', dataIndex: 'resident', key: 'resident' },
    { title: 'Căn hộ', dataIndex: 'unit', key: 'unit' },
    { 
      title: 'Trạng thái', 
      dataIndex: 'status', 
      key: 'status',
      render: (status: string) => {
        let color = '';
        let text = '';
        if (status === 'pending') { color = 'red'; text = 'Chờ xử lý'; }
        else if (status === 'in-progress') { color = 'blue'; text = 'Đang xử lý'; }
        else if (status === 'completed') { color = 'green'; text = 'Đã hoàn thành'; }
        return <Tag color={color}>{text.toUpperCase()}</Tag>;
      },
    },
    { title: 'Ngày yêu cầu', dataIndex: 'date', key: 'date' },
    { 
      title: 'Hành động', 
      key: 'action', 
      render: () => (
        <Button type="link">Chi tiết</Button>
      )
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    navigate('/staff-login');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <HeaderStaff />
      <div className="mt-16">
        {/* Staff Management Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Staff Management</h1>
            <p className="text-gray-500">Manage your apartment complex staff and their schedules</p>
          </div>
          <div className="flex space-x-4">
            <Button className="rounded-lg border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500" icon={<CalendarOutlined />}>View Schedule</Button>
            <Button type="primary" className="rounded-lg bg-black text-white hover:bg-gray-800" icon={<PlusOutlined />}>Add Staff Member</Button>
          </div>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className={stat.border}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <h2 className={`text-2xl font-bold ${stat.color}`}>{stat.value}</h2>
                  <p className="text-xs text-gray-400">{stat.suffix}</p>
                </div>
                <div className="p-2 rounded-lg bg-gray-50 flex items-center justify-center">{React.cloneElement(stat.icon, { className: stat.color + ' text-2xl' })}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultActiveKey="1" className="mb-6">
          <TabPane tab={<span className="font-medium text-gray-700 hover:text-blue-500">Staff Directory</span>} key="1">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Staff Directory Table */}
              <Card title="Staff Directory" className="lg:col-span-2">
                <p className="text-gray-500 mb-4">Manage all staff members and their information</p>
                <div className="flex space-x-4 mb-4">
                  <Input placeholder="Filter by name..." className="flex-1 rounded-lg border-gray-300" />
                  <Input placeholder="Filter by department..." className="flex-1 rounded-lg border-gray-300" />
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-800 uppercase tracking-wider">Employee</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-800 uppercase tracking-wider">Department<span className="ml-1"><SwapOutlined className="inline-block w-4 h-4" /></span></th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-800 uppercase tracking-wider">Shift</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-800 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-800 uppercase tracking-wider">Hire Date</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-800 uppercase tracking-wider">Salary</th>
                        <th className="px-6 py-3"></th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {staffData.map((staff) => (
                        <tr key={staff.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <Avatar size="small" icon={<UserOutlined />} className="mr-2" />
                              <div>
                                <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                                <div className="text-xs text-gray-500">{staff.id}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{staff.department}</div>
                            <div className="text-xs text-gray-500">{staff.role}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-lg ${staff.shift === 'morning' ? 'bg-yellow-100 text-yellow-800' : staff.shift === 'night' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                              {staff.shift}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-lg ${staff.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                              {staff.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staff.hireDate}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staff.salary}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-gray-400 hover:text-gray-600">...</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex justify-end mt-4 space-x-2">
                    <Button className="rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">Previous</Button>
                    <Button className="rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">Next</Button>
                  </div>
                </div>
              </Card>

              {/* Department Overview */}
              <Card title="Department Overview" className="lg:col-span-1">
                <p className="text-gray-500 mb-4">Staff distribution by department</p>
                <div className="space-y-4">
                  {departmentOverview.map((dept, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-white shadow-sm">
                      <div className="flex items-center space-x-4">
                        <span className="text-xl p-2 rounded-lg bg-gray-100 flex items-center justify-center">{React.cloneElement(dept.icon, { className: dept.icon.props.className })}</span>
                        <div>
                          <p className="text-sm font-medium text-gray-800">{dept.name}</p>
                          <p className="text-xs text-gray-500">{dept.employees} employees</p>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-gray-800">{dept.employees}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabPane>
          <TabPane tab={<span className="font-medium text-gray-700 hover:text-blue-500">Maintenance & Requests</span>} key="2">
            {/* Content for Maintenance Requests */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Maintenance & Resident Requests</h2>
              <p className="text-gray-500 mb-4">View and manage all maintenance requests and resident feedback.</p>
              <div className="mb-4 flex space-x-4">
                <Input.Search placeholder="Tìm kiếm theo ID hoặc chủ đề..." enterButton className="flex-1 rounded-lg border-gray-300" />
                <Select defaultValue="all" style={{ width: 150 }} className="rounded-lg">
                  <Option value="all">Tất cả trạng thái</Option>
                  <Option value="pending">Chờ xử lý</Option>
                  <Option value="in-progress">Đang xử lý</Option>
                  <Option value="completed">Đã hoàn thành</Option>
                </Select>
              </div>
              <Table dataSource={maintenanceRequests} columns={maintenanceColumns} pagination={false} rowKey="id" />
            </div>
          </TabPane>
          <TabPane tab={<span className="font-medium text-gray-700 hover:text-blue-500">Schedule</span>} key="3">
            {/* Content for Maintenance Schedule */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Maintenance Schedule</h2>
              <p className="text-gray-500 mb-4">Manage and view all scheduled maintenance activities.</p>
              <div className="flex justify-end mb-4">
                <Button type="primary" icon={<PlusCircleOutlined />}>Thêm lịch trình mới</Button>
              </div>
              <div className="border border-dashed border-gray-300 p-8 text-center text-gray-500 rounded-lg">
                <p>Giao diện lịch hoặc danh sách lịch trình bảo trì sẽ ở đây.</p>
              </div>
            </div>
          </TabPane>
          <TabPane tab={<span className="font-medium text-gray-700 hover:text-blue-500">Resident Services</span>} key="4">
            {/* Content for Resident Support and Utilities */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Resident Support & Utilities</h2>
              <p className="text-gray-500 mb-4">Cung cấp hỗ trợ cho cư dân và quản lý các dịch vụ tiện ích (thẻ xe, hồ bơi, khu BBQ, v.v.).</p>
              <div className="mb-4 flex space-x-4">
                <Input.Search placeholder="Tìm kiếm cư dân theo tên hoặc căn hộ..." enterButton className="flex-1 rounded-lg border-gray-300" />
                <Button type="primary" icon={<PlusOutlined />}>Cập nhật hồ sơ cư dân</Button>
              </div>
              <div className="border border-dashed border-gray-300 p-8 text-center text-gray-500 rounded-lg mb-4">
                <h3 className="text-lg font-bold mb-2">Quản lý hồ sơ cư dân</h3>
                <p>Giao diện quản lý hồ sơ cư dân và tiếp nhận hồ sơ tạm trú/tạm vắng sẽ ở đây.</p>
              </div>
              <div className="border border-dashed border-gray-300 p-8 text-center text-gray-500 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Quản lý tiện ích</h3>
                <p>Giao diện quản lý thẻ xe, hồ bơi, khu BBQ và các dịch vụ tiện ích khác sẽ ở đây.</p>
              </div>
            </div>
          </TabPane>
          <TabPane tab={<span className="font-medium text-gray-700 hover:text-blue-500">Performance</span>} key="5">
            Performance content goes here.
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default StaffHomepageTemp;
