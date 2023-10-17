import {Content} from './content';
import Header from './header/header';
import {LeftSidebar, RightSidebar} from './sidebar';

interface IProps {
  children: React.ReactNode;
}
const MainLayout = (props: IProps) => {
  const {children} = props;

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex h-screen'>
        <LeftSidebar />
        <Content>{children}</Content>
        <RightSidebar />
      </div>
    </div>
  );
};

export default MainLayout;
