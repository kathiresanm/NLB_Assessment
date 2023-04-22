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
    studentService.getStudents()
    .subscribe(data => {
      this.gridData = data.students;
    });
  }
}
