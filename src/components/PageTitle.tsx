import React from "react";

interface TitleProps {
  title: string;
}

const PageTitle: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="flex flex-auto justify-start items-center text-white px-[40px] text-[35px]">
      {title}
    </div>
  );
};

export { PageTitle };
