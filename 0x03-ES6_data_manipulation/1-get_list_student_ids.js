export default function getListStudentsIds(data) {
  if (Array.isArray(data)) {
    return data.map((item) => item.id);
  }
  return [];
}
