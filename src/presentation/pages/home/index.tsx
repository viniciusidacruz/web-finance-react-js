import { Fragment } from "react";

import { Head } from "./components/head";
import { Summary } from "./components/summary";
import { Analytics } from "./components/analytics";

export const Home = () => {
  return (
    <Fragment>
      <Head />
      <Summary />

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <Analytics />
      </div>
    </Fragment>
  );
};
