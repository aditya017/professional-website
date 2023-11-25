import { NavigateFunction } from 'react-router';

export const navigateTo = (navigate: NavigateFunction, path: string) => {
  navigate(path);
};

export const sendAnEmail = () => {
  const subject: string = encodeURIComponent('Subject of the email');
  const body: string = encodeURIComponent(
    'Hello, this is a pre-filled message.'
  );

  window.location.href = `mailto:${'adityareddy597@gmail.com'}?subject=${subject}&body=${body}`;
};

export const handleCallClick = () => {
  const phoneNumber: string = '5159926592';
  window.location.href = `tel:${phoneNumber}`;
};
