import { message } from 'antd';

type NotificationType = 'success' | 'error' | 'info' | 'warning';

export const showNotification = (
  type: NotificationType,
  content: string,
  duration: number = 3
) => {
  message[type]({
    content,
    duration,
    style: {
      marginTop: '20px',
    },
  });
};

export const showSuccess = (content: string) => showNotification('success', content);
export const showError = (content: string) => showNotification('error', content);
export const showInfo = (content: string) => showNotification('info', content);
export const showWarning = (content: string) => showNotification('warning', content); 