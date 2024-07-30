type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="xl:px-20 pt-9 2xl:px-64 flex flex-wrap justify-between ">{children}</div>;
};

export default Container;
