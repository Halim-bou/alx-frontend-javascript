//create interface for each teacher
interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any,
}

//interface Directors for each Teacher
interface Directors extends Teacher {
  numberOfRports: number;
}

//interface for function that print teacher short name
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

//function to return the short name of each teacher.
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

//interface for the constructor of class StudentClass
interface StudentConstruct {
  new (firstName: string, lastName: string): StudentClassInterface;
}

//interface for the class StudentClass.
interface StudentClassInterface {
    workOnHomework(): string;
    displayNmae(): string;
}

//Class StudentClass implementation.
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}
  
  workOnHomework(): string {
    return "Currently working";
  }
  displayNmae(): string {
    return this.firstName;
  }
}
