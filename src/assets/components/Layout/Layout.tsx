import React, { FC } from 'react';

interface props {
  children?: React.ReactNode;
}

const Layout: FC<props> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
