interface IProps {
  children: React.ReactNode;
}
const AuthLayout = (props: IProps) => {
  const {children} = props;

  return <div>{children}</div>;
};

export default AuthLayout;
