export function removeDuplicatesFromArray<T>(array: T[]): T[] {
  return array.filter((c, index) => array.indexOf(c) === index);
}
