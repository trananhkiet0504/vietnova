import { ReactNode } from 'react';

const FontIconLayout = ({ children }: { children: ReactNode }) => (
  <div className='font-icon-layout'>
    <link
      href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap'
      rel='stylesheet'
    />
    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/icon?family=Material+Icons'
    />
    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400&display=swap'
    />
    <link
      href='https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap'
      rel='stylesheet'
    />
    {children}
  </div>
);

export default FontIconLayout;
