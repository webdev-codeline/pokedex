export const updateArr = (array: number[], element: number) => {
  if (array.includes(element)) {
    return [...array.filter((item) => item !== element), element];
  }

  return [...array, element];
};
