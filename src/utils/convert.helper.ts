export const statNameToTile = (name: string) =>
  name === 'hp' ? name.toUpperCase() : name.charAt(0).toUpperCase() + name.slice(1).replace('-', ' ');
