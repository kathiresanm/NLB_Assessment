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
    debugger;
    studentService.getStudents()
    .subscribe(data => {
      debugger;
      result = data;
    })

    // TODO: Testing with mock data. Need to verify the data received from API above is set and shown at
    // the grid.
    this.gridData = studentService.getMockedStudents();
  }
}
