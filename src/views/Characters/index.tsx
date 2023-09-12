import { useQuery } from "@apollo/client";
import React from "react";

import { CharacterCard } from "./CharacterCard";
import { GET_CHARACTERS } from "./queries";
import type { GQCharacters } from "./types";

const Characters = (): JSX.Element => {
  const { data, error, loading } = useQuery<GQCharacters>(GET_CHARACTERS);

  if (loading) {
    return <p>{"Loading characters..."}</p>;
  }

  if (error !== undefined) {
    return <p>{`Error: ${error.message}`}</p>;
  }

  return (
    <div className={"flex flex-wrap items-stretch justify-center -m-2"}>
      {data!.characters.results.map((char) => (
        <CharacterCard character={char} key={char.id} />
      ))}
    </div>
  );
};

export { Characters };
