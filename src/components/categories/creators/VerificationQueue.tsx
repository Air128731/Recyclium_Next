import React from "react";

import Image from "next/image";
import Card from "../../Card/Card";
import missionIcon from "public/assets/images/coca-cola.svg";
import storeIcon from "public/assets/images/heinken.svg";

const data = [
  {
    name: "Coca-Cola",
    action: "mission",
    date: "Jul 9",
    location: "Santa Fe",
  },
  {
    name: "Ivan",
    action: "storer",
    date: "Jul 9",
    location: "Belgrade",
  },
];

interface IVerificationItem {
  name: string;
  action: string;
  date: string;
  location: string;
}

const VerificationQueue = () => {
  return (
    <Card>
      <div className="flex justify-between">
        <div className="text-lg font-semibold text-darkgray font-primary">
          Verification Queue
        </div>
        <div className="text-base text-darkgray">25</div>
      </div>
      <div className="flex flex-col mt-4 space-y-6">
        {data.map((item: IVerificationItem, index: number) => {
          const { action, name, date, location } = item;
          return (
            <div
              className="flex items-start w-full gap-3 p-3 bg-white rounded-lg"
              key={index}
            >
              <Image
                src={action === "mission" ? missionIcon : storeIcon}
                alt="icon"
                width={32}
                height={32}
              />
              <div className="w-full">
                <div className="flex items-center w-full gap-1">
                  <span className="text-lg font-semibold font-primary text-darkgray">
                    {name}
                  </span>
                  <span className="text-lg font-primary text-darkgray">
                    {action === "mission"
                      ? "wants to create a mission"
                      : "wants to become a creator"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm font-light font-primary text-darkgray">
                    {date}
                  </div>
                  <div className="text-sm font-light font-primary text-darkgray">
                    {location}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default VerificationQueue;
