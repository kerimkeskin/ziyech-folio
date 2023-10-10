import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const Content = (props: IProps) => {
  const {children} = props;

  return <main>{children}</main>;
};

export default Content;
