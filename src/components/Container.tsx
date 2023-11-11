import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full px-[40px] max-w-[1200px] bg-red-500">{children}</div>
  );
};

export default Container;
