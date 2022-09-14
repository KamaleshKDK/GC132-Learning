import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics-of-angular-2';

  listOfAnimes = [1];

  listOfCourses: any;

  addCourse() {
    this.listOfCourses.push({ id: 6, name: "Vue-js" })
  }
  removeCourse(course: any) {
    let index = this.listOfCourses.indexOf(course);
    this.listOfCourses.splice(index, 1)
  }
  loadCourse() {
    this.listOfCourses = [
      { id: 1, name: "Angular" },
      { id: 2, name: "React" },
      { id: 3, name: "Node-js" },
      { id: 4, name: "Express-js" },
      { id: 5, name: "Mongo-DB" },
    ]

  }

  trackCourse (index:any, course:any){
    return course ? course.id : undefined;
  }

}
