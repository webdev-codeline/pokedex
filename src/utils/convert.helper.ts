export const capitalizeFirstLetter = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const statNameToTile = (name: string) =>
  name === 'hp' ? name.toUpperCase() : capitalizeFirstLetter(name).replace('-', ' ');
