import React from "react";
import Logs from "../Logs/Logs";
import Missions from "../Missions/Missions";
import Incidents from "../Incidents/Incidents";
import Earnings from "../Earnings/Earnings";
import InnerHeader from "../_Layout/InnerHeader/InnerHeader";
import StorerApp from "../StorerApp/StorerApp";

interface MissionData {
  title: string;
  company: string;
  amount: number;
  imageUrl: string;
}

const Storer = () => {
  return (
    <>
      <InnerHeader
        type="Storer"
        verified={false}
        avatar="https://randomuser.me/api/portraits/med/men/1.jpg"
        title="Mo's Garage"
        totalEarned={358.78}
        incident={1}
        stored={1000}
        returned={400}
        missions={15}
        address="0xf7NdoiNln58SSjtusfgtiin"
      />
      <div className="flex flex-col gap-3 p-7">
        <div className="flex flex-row gap-7">
          <div className="w-1/2">
            <StorerApp />
          </div>
          <div className="w-1/3 h-full">
            <Missions missionData={[]} headerData={[]} type="someType" />
          </div>
          <div className="flex flex-col w-1/3">
            <div className="w-full">
              <Incidents />
            </div>
            <div className="w-full mt-4">
              <Earnings data={[]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Storer;
