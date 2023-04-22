import { Component } from '@angular/core';
import { Student } from '../Model/Student';
import { StudentDataService } from '../Services/student-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentsApp';
  gridData: Student[] = [];

  constructor(private studentService: StudentDataService){
    let result;
    studentService.getStudents()
    .subscribe(data => {
      debugger;
      result = data;
    })
    this.gridData = studentService.getMockedStudents();
  }
}
