import { render, screen } from "@testing-library/react";
import React from "react";

import { CharacterCard } from ".";
import type { CharacterCardProps } from "./types";

describe("CharacterCard", () => {
  const character: CharacterCardProps["character"] = {
    id: 1,
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    location: {
      name: "Citadel of Ricks",
    },
    name: "Morty Smith",
    species: "Human",
    status: "Alive",
  };

  it("Render character's information", () => {
    expect.assertions(5);
    render(<CharacterCard character={character} />);

    [
      character.name,
      `${character.status} - ${character.species}`,
      "Last known location:",
      character.location.name,
    ].forEach((text) => {
      expect(screen.queryByText(text)).toBeInTheDocument();
    });
    expect(screen.queryByAltText(character.name)).toBeInTheDocument();
  });
});
