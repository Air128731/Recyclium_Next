import { Main } from "../../templates/Main";
import React from "react";
import { useRouter } from "next/router";
import { Meta } from "src/layouts/Meta";
import Storer from "src/components/Storer/Storer";

const StorerDetailsPage = () => {
  const router = useRouter();
  const { details } = router.query;
  return (
    <Main meta={<Meta title="Recyclium" description="Recyclium front-end" />}>
      <Storer />
    </Main>
  );
};

export default StorerDetailsPage;
