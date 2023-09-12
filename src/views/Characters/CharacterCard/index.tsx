import React from "react";

import type { CharacterCardProps } from "./types";

const CharacterCard = ({
  character: char,
}: CharacterCardProps): JSX.Element => {
  return (
    <div className={"bg-red-900 sm:flex m-2 rounded w-full sm:w-auto"}>
      <div className={"h-64 sm:h-auto sm:w-40"}>
        <img
          alt={char.name}
          className={
            "h-full object-center object-cover rounded-t sm:rounded-e-none sm:rounded-s w-full"
          }
          src={char.image}
        />
      </div>
      <div className={"flex flex-col justify-between px-4 py-2 sm:w-96"}>
        <div className={"mb-2"}>
          <p className={"font-bold text-2xl"}>{char.name}</p>
          <p>{`${char.status} - ${char.species}`}</p>
        </div>
        <div>
          <p className={"opacity-80"}>{"Last known location:"}</p>
          <p>{char.location.name}</p>
        </div>
      </div>
    </div>
  );
};

export { CharacterCard };
