export interface Suggestion {
  text: string;
  prompt: string;
}

const artStyles = ["realistic", "interior", "architectural sketch"];

const basePrompts: { text: string; prompt: string }[] = [
  {
    text: "Litet & Skandinaviskt",
    prompt: "A small Scandinavian bathroom with white tiles and wooden elements",
  },
  {
    text: "Lyxigt & Modernt",
    prompt: "A luxurious modern bathroom with marble walls and walk-in shower",
  },
  {
    text: "Industriellt",
    prompt: "An industrial bathroom with concrete walls and black fixtures",
  },
  {
    text: "Vintage 1920-tal",
    prompt: "A vintage 1920s Swedish bathroom with clawfoot tub and patterned tiles",
  },
];

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomSuggestions(count: number = 5): Suggestion[] {
  const shuffledPrompts = shuffle(basePrompts);
  const shuffledStyles = shuffle(artStyles);

  return shuffledPrompts.slice(0, count).map((item, index) => ({
    text: item.text,
    prompt: `${item.prompt}, in the style of ${
      shuffledStyles[index % shuffledStyles.length]
    }`,
  }));
}