import { Student } from "./Student";

export class StudentSummary{
    public Data: Student[];

    constructor(data: Student[]){
        this.Data = data;
    }
}