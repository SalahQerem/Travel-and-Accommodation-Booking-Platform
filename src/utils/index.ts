export const textSlicer = (text: string) => {
  if (text.length <= 150) return text;

  let slicedText = text.substring(0, 150);

  const nextSpaceIndex = text.indexOf(" ", 150);

  if (nextSpaceIndex !== -1) {
    slicedText = text.substring(0, nextSpaceIndex);
  }

  return slicedText + "...";
};
