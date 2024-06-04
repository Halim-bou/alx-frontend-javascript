export default function updateUniqueItms(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }
  map.forEach((k, v) => {
    if (v === 1) map.set(k, 100);
  });
}
