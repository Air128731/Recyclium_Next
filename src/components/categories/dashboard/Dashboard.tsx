import React from "react";

import VerificationQueue from "../../../components/VerificationQueue/VerificationQueue";
import TopTenBox from "../../../components/TopTenBox/TopTenBox";
import GlobalProgress from "../../../components/GlobalProgress/GlobalProgress";
import ActiveLocation from "../../../components/ActiveLocation/ActiveLocation";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-5 pt-5 px-7">
      <VerificationQueue />
      <div className="col-span-2 ">
        <TopTenBox />
      </div>
      <div className="flex flex-col gap-5">
        <GlobalProgress />
        <ActiveLocation />
      </div>
    </div>
  );
};

export default Dashboard;
