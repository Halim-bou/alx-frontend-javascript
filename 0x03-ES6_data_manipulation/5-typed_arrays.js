export default function createInt8TypedArray(length, position, value) {
  const val = new DataView(new ArrayBuffer(length));

  try {
    val.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return val;
}
