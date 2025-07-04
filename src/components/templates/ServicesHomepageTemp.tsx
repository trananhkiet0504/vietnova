import { FC, useEffect, useState } from 'react';
import {
  BuildOutlined,
  ClockCircleOutlined,
  CustomerServiceOutlined,
  DollarOutlined,
  PhoneOutlined,
  SafetyOutlined,
  StarOutlined,
  ToolOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Card, Col, Row, Tag, Typography } from 'antd';
import { motion } from 'framer-motion';
import axios from 'axios';
import { API_CONFIG } from './api.config';

const { Title, Paragraph, Text } = Typography;

const iconMap: Record<string, JSX.Element> = {
  security: <SafetyOutlined />,
  maintenance: <ToolOutlined />,
  resident: <UserOutlined />,
  financial: <DollarOutlined />,
  infrastructure: <BuildOutlined />,
  support: <CustomerServiceOutlined />,
};

const ServicesHomepageTemp: FC = () => {
  const [services, setServices] = useState<any[]>([]);
  const [selectedCategory] = useState('all');
  const [searchValue] = useState('');
  const [sortValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/api/services');
        // API trả về data.services theo cấu trúc backend
        const servicesData = response.data.data?.services || response.data;
        const mapped = servicesData.map((item: any) => ({
          ...item,
          icon: iconMap[item.category] || <ToolOutlined />,
        }));
        setServices(mapped);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Không thể tải danh sách dịch vụ');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const filteredServices = services.filter(
    (service) =>
      (selectedCategory === 'all' || service.category === selectedCategory) &&
      (service.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        service.description.toLowerCase().includes(searchValue.toLowerCase()))
  );

  const sortedServices = [...filteredServices].sort((a, b) => {
    if (sortValue === 'rating_desc') return b.rating - a.rating;
    if (sortValue === 'price_asc') return a.price > b.price ? 1 : -1;
    if (sortValue === 'price_desc') return a.price < b.price ? 1 : -1;
    return 0;
  });

  if (loading) {
    return (
      <div className='py-12 text-center'>
        <Title level={4}>Đang tải dịch vụ...</Title>
      </div>
    );
  }

  if (error) {
    return (
      <div className='py-12 text-center text-red-500'>
        <Title level={4}>{error}</Title>
      </div>
    );
  }

  return (
    <div style={{ padding: '0 0 24px 0' }}>
      <motion.div
        key={selectedCategory + searchValue + sortValue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Row gutter={[24, 24]}>
          {sortedServices.map((service) => (
            <Col xs={24} sm={12} lg={8} key={service.id}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card
                  hoverable
                  className='h-full'
                  actions={[
                    <Button type='primary' key='contact'>
                      <PhoneOutlined /> Liên hệ
                    </Button>,
                    <Button key='details'>Chi tiết</Button>,
                  ]}
                >
                  <div className='mb-4 text-center'>
                    <div className='mb-3 text-4xl text-blue-500'>
                      {service.icon}
                    </div>
                    <Title level={4} className='mb-2'>
                      {service.title}
                    </Title>
                    <Paragraph className='mb-3 text-gray-600'>
                      {service.description}
                    </Paragraph>
                  </div>

                  <div className='mb-4 space-y-2'>
                    <div className='flex items-center justify-between'>
                      <Text strong>Giá:</Text>
                      <Text className='text-green-600'>{service.price}</Text>
                    </div>
                    <div className='flex items-center justify-between'>
                      <Text>Đánh giá:</Text>
                      <div className='flex items-center'>
                        <StarOutlined className='mr-1 text-yellow-400' />
                        <Text>{service.rating}</Text>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <Text>Phản hồi:</Text>
                      <div className='flex items-center'>
                        <ClockCircleOutlined className='mr-1 text-blue-400' />
                        <Text>{service.responseTime}</Text>
                      </div>
                    </div>
                  </div>

                  <div className='mb-4'>
                    <Text strong className='mb-2 block'>
                      Tính năng:
                    </Text>
                    <div className='flex flex-wrap gap-1'>
                      {service.features?.map((feature: string, index: number) => (
                        <Tag key={index} color='blue'>
                          {feature}
                        </Tag>
                      ))}
                    </div>
                  </div>

                  <div className='text-center'>
                    <Tag color='green' className='w-full'>
                      {service.status === 'available' ? 'Sẵn sàng' : 'Không sẵn sàng'}
                    </Tag>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {sortedServices.length === 0 && (
          <div className='py-12 text-center'>
            <Title level={4} className='text-gray-500'>
              Không tìm thấy dịch vụ phù hợp
            </Title>
            <Paragraph className='text-gray-400'>
              Hãy thử thay đổi bộ lọc hoặc tìm kiếm với từ khóa khác
            </Paragraph>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ServicesHomepageTemp;
