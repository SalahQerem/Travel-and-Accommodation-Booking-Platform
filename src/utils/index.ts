export const textSlicer = (text: string) => {
  if (text.length <= 150) return text;

  let slicedText = text.substring(0, 150);

  const nextSpaceIndex = text.indexOf(" ", 150);

  if (nextSpaceIndex !== -1) {
    slicedText = text.substring(0, nextSpaceIndex);
  }

  return slicedText + "...";
};

export const formatCamelCaseText = (text: string): string => {
  const capitalized = text.charAt(0).toUpperCase() + text.slice(1);

  const formatted = capitalized.replace(/([A-Z])/g, " $1").trim();

  return formatted;
};
