import type { MockedResponse } from "@apollo/client/testing";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen, waitFor } from "@testing-library/react";
import { GraphQLError } from "graphql";
import React from "react";

import { Characters } from ".";
import { GET_CHARACTERS } from "./queries";
import type { GQCharacters } from "./types";

describe("Characters", () => {
  const getCharactersMock: MockedResponse<GQCharacters> = {
    request: {
      query: GET_CHARACTERS,
    },
    result: {
      data: {
        characters: {
          results: [
            {
              id: 1,
              image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
              name: "Morty Smith",
              species: "Human",
              status: "Alive",
            },
          ],
        },
      },
    },
  };

  const getCharactersErrorMock: MockedResponse<GQCharacters> = {
    error: new GraphQLError("Error getting characters"),
    request: {
      query: GET_CHARACTERS,
    },
  };

  it("Render characters", async () => {
    expect.assertions(1);
    render(
      <MockedProvider addTypename={false} mocks={[getCharactersMock]}>
        <Characters />
      </MockedProvider>,
    );
    await waitFor(() => {
      expect(screen.queryByText("Morty Smith")).toBeInTheDocument();
    });
  });

  it("Render error message", async () => {
    expect.assertions(1);
    render(
      <MockedProvider addTypename={false} mocks={[getCharactersErrorMock]}>
        <Characters />
      </MockedProvider>,
    );
    await waitFor(() => {
      expect(
        screen.queryByText("Error: Error getting characters"),
      ).toBeInTheDocument();
    });
  });

  it("Render loading message", async () => {
    expect.assertions(1);
    render(
      <MockedProvider addTypename={false} mocks={[]} showWarnings={false}>
        <Characters />
      </MockedProvider>,
    );
    await waitFor(() => {
      expect(screen.queryByText("Loading characters...")).toBeInTheDocument();
    });
  });
});
