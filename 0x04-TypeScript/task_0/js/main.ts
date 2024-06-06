interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}
const student1: Student = {
  firstName: "Halim",
  lastName: "Haliiii",
  age: 120,
  location: "Tafdna",
};
const student2: Student = {
  firstName: "Hellela",
  lastName: "hellola",
  age: 2,
  location: "ounta cheghlak",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

const table_body = document.createElement("tbody");

studentsList.forEach(student => {
  const row = document.createElement("tr");
  const firstNameColl = document.createElement("td");
  firstNameColl.textContent = student.firstName;
  row.appendChild(firstNameColl);

  const locationColl = document.createElement("td");
  locationColl.textContent = student.location;
  row.appendChild(locationColl);

  table_body.appendChild(row);
});
table.appendChild(table_body);
document.body.appendChild(table);
