import { Injectable } from '@angular/core';
import { Student } from '../Model/Student';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentSummary } from '../Model/StudentSummary';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(private httpClient: HttpClient) { }

  public getMockedStudents(): Student[] {
    let students: Student[] = [
      {
        Name : "Alice",
        Age: 21,
        Hobbies: ["test"]
      },
      {
        Name: "Bob",
        Age: 22,
        Hobbies: ["test"]
      }
    ];
    return students;
  }

  public getStudents(): Observable<StudentSummary> {
    return this.httpClient.get<StudentSummary>('https://localhost:44363/data');
  }

}
