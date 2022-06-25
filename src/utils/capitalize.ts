export function UpperCaseFirst(text: string) {
  const firstLetter = text.slice(0, 1);
  const rest = text.slice(1);
  return `${firstLetter.toUpperCase()}${rest}`;
}