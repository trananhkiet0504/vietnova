import React from 'react';
import { Alert } from 'antd';
import { AlertProps } from 'antd/lib/alert';

interface NotificationProps extends AlertProps {
  message: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  showIcon?: boolean;
  closable?: boolean;
  onClose?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type = 'error',
  showIcon = true,
  closable = true,
  onClose,
  ...props
}) => {
  return (
    <Alert
      message={message}
      type={type}
      showIcon={showIcon}
      closable={closable}
      onClose={onClose}
      className="mb-4"
      {...props}
    />
  );
};

export default Notification; 