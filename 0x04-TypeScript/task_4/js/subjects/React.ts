/// <reference path="Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number,
  }

  export class React extends Subject {
    getRequirements() {
        return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this.getTeacher() && this.getTeacher().experienceTeachingReact > 0) {
        return `Available Teacher: ${this.getTeacher().firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}