/// <reference path="Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number,
  }
  
  export class Java extends Subject {
    getRequirements() {
      return "Here is the list of requirements for Java";
    }
    getAvailableTeacher(): string {
      if (this.getTeacher() && this.getTeacher().experienceTeachingJava > 0) {
        return `Available Teacher: ${this.getTeacher().firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}