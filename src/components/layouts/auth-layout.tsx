interface IProps {
  children: React.ReactNode;
}
const AuthLayout = (props: IProps) => {
  const {children} = props;

  return <div className='flex h-screen w-full max-w-screen-2xl'>{children}</div>;
};

export default AuthLayout;
