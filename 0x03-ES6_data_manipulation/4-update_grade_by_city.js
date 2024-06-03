export default function updateStudentGradeByCity(arr, city, newGrades) {
  const arrByCity = arr.filter((item) => item.location === city);
  return arrByCity.map((student) => {
    const grades = newGrades.find((grade) => student.id === grade.studentId);
    const theGrade = grades ? grades.grade : 'N/A';
    return { ...student, grade: theGrade };
  });
}
