import React from "react";
import Leaderboard from "./Leaderboard";
import VerificationQueue from "./VerificationQueue";

import { useAppSelector } from "../../../redux/hooks";
import RecentVerified from "./RecentVerified";

const Storers = () => {
  const { members } = useAppSelector((s) => ({
    members: s.user.members,
  }));
  return (
    <div className=" pt-5 px-7">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-primary font-semibold text-darkgray">
          Storers
        </div>
        <div className="text-sm font-primary text-green bg-opacity-20 bg-green rounded-xl py-1 px-1.5 font-semibold">
          123,456
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5">
        <VerificationQueue />
        <div className="col-span-2 ">
          <Leaderboard members={members} />
        </div>
        <RecentVerified />
      </div>
    </div>
  );
};

export default Storers;
