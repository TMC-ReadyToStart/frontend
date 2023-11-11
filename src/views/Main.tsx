import { Container, PageTitle } from "components";
import { Challenge } from "components/Challenge";
import React from "react";

const Main = () => {
  return (
    <div className="flex-col flex-auto w-full h-full">
      <div className="w-full h-[150px] flex flex-col">
        <PageTitle title={"Quest - Data Collection"} />
        <div className="w-full h-[30px] bg-white"></div>
      </div>
      <div className="flex flex-col justify-center w-full h-full">
        <div className="flex justify-center items-center w-full">
          <Container>
            <Challenge />
          </Container>
        </div>
      </div>
    </div>
  );
};

export { Main };
