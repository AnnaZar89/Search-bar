export const firstLetterUpperCase = (text: string) => {
  return text
    .split("")
    .map((letter, index) =>
      index ? letter.toLowerCase() : letter.toUpperCase()
    )
    .join("");
};
