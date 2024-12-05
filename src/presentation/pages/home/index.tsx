import { Fragment } from "react";

import { Head } from "./components/head";
import { Summary } from "./components/summary";

export const Home = () => {
  return (
    <Fragment>
      <Head />
      <Summary />
    </Fragment>
  );
};
