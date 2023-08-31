import React from "react";
import Logs from "../Logs/Logs";
import Missions from "../Missions/Missions";
import Incidents from "../Incidents/Incidents";
import Earnings from "../Earnings/Earnings";
import InnerHeader from "../../components/_Layout/InnerHeader/InnerHeader";

const Collector = () => {
  return (
    <>
      <InnerHeader
        type="Collector"
        verified={true}
        avatar="https://randomuser.me/api/portraits/med/men/52.jpg"
        title="Samuel Martin"
        totalRewarded={104.78}
        incident={0}
        successRate={95}
        scanned={300}
        stored={100}
        returned={500}
        missions={15}
        address="0xf7NdoiNln58SSjtusfgtiin"
      />
      <div className="flex flex-col gap-3 p-7">
        <div className="flex flex-row gap-7">
          <div className="w-1/2">
            <Logs type="collector" />
          </div>
          <div className="w-1/3 h-full">
            <Missions type="colletor" />
          </div>
          <div className="flex flex-col w-1/3">
            <div className="w-full">
              <Incidents />
            </div>
            <div className="w-full mt-4">
              <Earnings />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collector;
