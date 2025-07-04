import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { 
  SafetyOutlined, 
  ToolOutlined, 
  UserOutlined, 
  DollarOutlined, 
  BuildOutlined, 
  CustomerServiceOutlined 
} from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

const StyledCard = styled(Card)`
  height: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  color: #1890ff;
`;

const services = [
  {
    title: 'An ninh & Bảo vệ',
    icon: <SafetyOutlined />,
    description: 'Đảm bảo an toàn 24/7 với đội ngũ bảo vệ chuyên nghiệp, hệ thống camera giám sát và kiểm soát ra vào chặt chẽ.'
  },
  {
    title: 'Bảo trì & Sửa chữa',
    icon: <ToolOutlined />,
    description: 'Dịch vụ bảo trì định kỳ và sửa chữa nhanh chóng cho tất cả các hạng mục trong khu chung cư.'
  },
  {
    title: 'Dịch vụ cư dân',
    icon: <UserOutlined />,
    description: 'Hỗ trợ đa dạng các dịch vụ cho cư dân như đặt lịch sử dụng tiện ích, đăng ký dịch vụ thêm.'
  },
  {
    title: 'Quản lý tài chính',
    icon: <DollarOutlined />,
    description: 'Quản lý thu chi minh bạch, thanh toán trực tuyến, báo cáo tài chính định kỳ cho cư dân.'
  },
  {
    title: 'Quản lý cơ sở hạ tầng',
    icon: <BuildOutlined />,
    description: 'Giám sát và bảo trì hệ thống cơ sở hạ tầng, đảm bảo vận hành trơn tru các tiện ích chung.'
  },
  {
    title: 'Hỗ trợ 24/7',
    icon: <CustomerServiceOutlined />,
    description: 'Đội ngũ hỗ trợ luôn sẵn sàng 24/7 để giải quyết mọi vấn đề và yêu cầu của cư dân.'
  }
];

const ServicesTemp: React.FC = () => {
  return (
    <div style={{ padding: '40px 20px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
        Dịch Vụ Quản Lý Chung Cư
      </Title>
      
      <Row gutter={[24, 24]}>
        {services.map((service, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <StyledCard>
              <div style={{ textAlign: 'center' }}>
                <IconWrapper>
                  {service.icon}
                </IconWrapper>
                <Title level={4}>{service.title}</Title>
                <Paragraph>
                  {service.description}
                </Paragraph>
              </div>
            </StyledCard>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServicesTemp;