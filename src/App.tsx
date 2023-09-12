import React from "react";

import { GraphQLProvider } from "utils/graphql";
import { Characters } from "views/Characters";

const App = (): JSX.Element => {
  return (
    <GraphQLProvider>
      <div className={"bg-red-950 min-h-screen p-4 text-red-50"}>
        <p className={"font-bold mb-8 text-4xl"}>{"Rick and Morty"}</p>
        <Characters />
      </div>
    </GraphQLProvider>
  );
};

export { App };
