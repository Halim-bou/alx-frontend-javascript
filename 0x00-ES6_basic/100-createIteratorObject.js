export default function creatIteratorObject(report) {
  const alEmployees = report.allEmployees;
  let employees = [];

  for (const depart of Object.values(alEmployees)) {
    employees = [...employees, ...depart];
  }
  return employees;
}
