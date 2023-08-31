import React from "react";
import { useRouter } from "next/router";
import InnerHeader from "src/components/_Layout/InnerHeader/InnerHeader";
import MissionCard from "../MissionCard/MissionCard";

interface Props {
  pathdetails?: any;
}

const CollectorDetails = ({ pathdetails }: Props) => {
  return (
    <div>
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
      <div className="p-7">
        <MissionCard type="collector" />
      </div>
    </div>
  );
};

export default CollectorDetails;
