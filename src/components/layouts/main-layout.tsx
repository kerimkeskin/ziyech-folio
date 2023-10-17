import {Content} from './content';
import {LeftSidebar, RightSidebar} from './sidebar';

interface IProps {
  children: React.ReactNode;
}
const MainLayout = (props: IProps) => {
  const {children} = props;

  return (
    <div>
      <LeftSidebar />
      <Content>{children}</Content>
      <RightSidebar />
    </div>
  );
};

export default MainLayout;
