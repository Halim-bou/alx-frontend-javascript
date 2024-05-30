export default function guardrail(mathFunction) {
  let queue = [];
  try {
    queue = [mathFunction(), 'Guardrail was processed'];
  } catch (e) {
    queue = [`Error: ${e.message}`, 'Guardrail was processed'];
  }
  return queue;
}
