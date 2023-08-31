import React from "react";
import { useRouter } from "next/router";
import InnerHeader from "src/components/_Layout/InnerHeader/InnerHeader";
import Earnings from "../Earnings/Earnings";
import Incidents from "../Incidents/Incidents";
import Missions from "../Missions/Missions";
import { myMissionData } from "../../utils/MissionData";
import Logs from "../Logs/Logs";

interface Props {
  pathdetails?: any;
}

// const myHeaderData = ["Queued", "Ongoing", "Finished"];
const myHeaderData = ["", " ", ""];
const headerData = ["Stored(138)", "Returned(71)"];

const StorerDetails = ({ pathdetails }: Props) => {
  return (
    <div>
      <InnerHeader
        type="Storer"
        verified={true}
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
            <Logs type="storer" headerData={headerData} />
          </div>
          <div className="w-1/3 h-full">
            <Missions
              missionData={myMissionData}
              headerData={myHeaderData}
              missiontype="storer"
              type="someType"
            />
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
    </div>
  );
};

export default StorerDetails;
