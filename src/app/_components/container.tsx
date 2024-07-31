type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className=" 2xl:mx-60 flex flex-wrap ">{children}</div>;
};

export default Container;
