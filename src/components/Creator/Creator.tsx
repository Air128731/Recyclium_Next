import React from "react";
import InnerHeader from "../../components/_Layout/InnerHeader/InnerHeader";
import MissionMain from "../MissionDetails/MissionMain";
import MissionUnMain from "../MissionDetails/MissionUnMain";

type creatorProps = {
  verifiedStatus: boolean;
};

const Creator = ({ verifiedStatus }: creatorProps) => {
  return (
    <>
      <InnerHeader
        type="Mission"
        verified={verifiedStatus}
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
      <div className="p-7">
        {verifiedStatus ? <MissionMain /> : <MissionUnMain />}
      </div>
    </>
  );
};

export default Creator;
