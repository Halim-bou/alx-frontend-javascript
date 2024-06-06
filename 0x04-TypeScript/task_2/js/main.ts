interface DirectorInterface {
  workFromHome(): string,
  getCoffeBreak(): string,
  workDirectorTasks(): string,
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeBreak(): string,
  workTeacherTasks(): string,   
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from Home";
  }
  getCoffeBreak(): string {
   return "no coffe break"   
  }
  getToWork(): string {
    return "Getting a coffe break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}
console.log(createEmployee(500));

function isDirector(employee: Director | Teacher):  employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): void {
  isDirector(employee) ?
  console.log(employee.workDirectorTasks()) :
  console.log(employee.workTeacherTasks())
}
executeWork(createEmployee(500));

type Subjects =  "Math" | "History";

function teachClass(todayClass: string): string {
    return todayClass === "Math" ? "Teaching Math" : "Teaching History";
}

console.log(teachClass('History'));