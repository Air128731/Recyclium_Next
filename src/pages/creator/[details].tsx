import { Main } from "../../templates/Main";
import React from "react";
import { useRouter } from "next/router";
import { Meta } from "src/layouts/Meta";
import Creators from "src/components/Creator/Creator";

const CreatorsDetailsPage = () => {
  const router = useRouter();
  const { details } = router.query;
  return (
    <Main meta={<Meta title="Recyclium" description="Recyclium front-end" />}>
      <Creators verifiedStatus={false} />
      {/* <Creators verifiedStatus={true} /> */}
    </Main>
  );
};

export default CreatorsDetailsPage;
