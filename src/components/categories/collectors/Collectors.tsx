import React from "react";
import Leaderboard from "./Leaderboard";
import RecentCollectors from "./RecentCollectors";

import { useAppSelector } from "../../../redux/hooks";

const Collectors = () => {
  const { members } = useAppSelector((s) => ({
    members: s.user.members,
  }));
  return (
    <div className=" pt-5 px-7">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-primary font-semibold text-darkgray">
          Collectors
        </div>
        <div className="text-sm font-primary text-darkgray bg-gray rounded-xl py-1 px-1.5 font-semibold">
          123,456
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5">
        <RecentCollectors />
        <div className="col-span-3 ">
          <Leaderboard members={members} />
        </div>
      </div>
    </div>
  );
};

export default Collectors;
