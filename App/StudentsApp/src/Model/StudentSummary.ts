import { Student } from "./Student";

export class StudentSummary{
    public students: Student[];

    constructor(data: Student[]){
        this.students = data;
    }
}
