import React from "react";

const Challenge = () => {
  return (
    <div className="h-[100px] rounded-lg bg-lightGray w-full flex justify-between items-center">
      <div className="flex flex-col justify-between items-center w-full">
        <div className="flex justify-start items-center w-full">
          <div className="w-10 h-10 bg-yellow-400" />
          <span>Driving School Series</span>
        </div>

        <div className="flex gap-5 w-full justiy-start">
          <div className="flex">
            <img />
            <span>44</span>
          </div>
          <div className="flex">
            <img />
            <span>120</span>
          </div>
          <div className="flex">
            <img />
            <span>kkriva92</span>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex">Badges</div>
        <div className="w-10 h-10 bg-green-300"></div>
      </div>
    </div>
  );
};

export { Challenge };
