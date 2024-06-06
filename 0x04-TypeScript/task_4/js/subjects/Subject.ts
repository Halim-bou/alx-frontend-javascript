/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    private teacher: Subjects.Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
    getTeacher(): Teacher {
      return this.teacher;
    }
  }
}