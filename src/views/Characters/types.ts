interface GQCharacter {
  id: number;
  image: string;
  location: {
    name: string;
  };
  name: string;
  species: string;
  status: string;
}

interface GQCharacters {
  characters: {
    results: GQCharacter[];
  };
}

export type { GQCharacter, GQCharacters };
