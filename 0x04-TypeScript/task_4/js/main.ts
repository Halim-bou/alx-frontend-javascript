/// <reference path="./subjects/Teacher.ts"/>
/// <reference path="./subjects/Cpp.ts"/>
/// <reference path="./subjects/React.ts"/>
/// <reference path="./subjects/Java.ts"/>

export const react = new Subjects.React();
export const java = new Subjects.Java();
export const cpp = new Subjects.Cpp();
const cTeacher: Subjects.Teacher = {
    firstName: "HAlim",
    lastName: "Bouu",
    experienceTeachingC: 10,
}

console.log("c++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements);
console.log(cpp.getAvailableTeacher);

console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements);
console.log(java.getAvailableTeacher);

console.log("React");
console.log(react.getRequirements);
console.log(react.getAvailableTeacher);


