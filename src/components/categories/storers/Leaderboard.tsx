import React from "react";
import Table from "../../Table/Table";
import { IoSearch } from "react-icons/io5";
import Card from "src/components/Card/Card";
import { useRouter } from "next/router";

type props = {
  members: Array<any>;
};

const Leaderboard = ({ members }: props) => {
  const router = useRouter();

  const rows = [];
  for (let i = 0; i < members.length; i++) {
    const e: any = members[i];
    const walletno = e.email;
    const location = e.location.country;
    const totalScans = e.phone;
    const rewardsEarned = e.cell;

    rows.push([
      <div
        key={walletno}
        className="font-primary text-xs font-normal text-darkgray"
      >
        {walletno}
      </div>,

      <div
        key={location}
        className="font-primary text-xs font-normal text-darkgray"
      >
        {location}
      </div>,

      <div
        key={totalScans}
        className="font-primary text-xs font-normal text-darkgray"
      >
        {totalScans}
      </div>,

      <div
        key={rewardsEarned}
        className="font-primary text-xs font-normal text-darkgray"
      >
        {rewardsEarned}
      </div>,
    ]);
  }

  let content;

  if (rows.length) {
    content = (
      <>
        <Table
          header={[
            "Name",
            "Location",
            "Total Colected Items",
            "Total Rewards Earned",
          ]}
          rows={rows}
          onClick={(r) => onClickRow(r)}
        />
      </>
    );
  } else {
    content = <div className="">No List.</div>;
  }

  const onClickRow = (props: any) => {
    router.push(`/storer/${props[2].key}`);
  };

  return (
    <Card>
      <div className="flex justify-between mb-3">
        <div className="text-lg font-semibold text-darkgray font-primary">
          Storers Leaderboard
        </div>
        <div className="text-base text-darkgray">
          <IoSearch />
        </div>
      </div>
      {content}
    </Card>
  );
};

export default Leaderboard;
