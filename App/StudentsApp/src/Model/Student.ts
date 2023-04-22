export class Student{
    public Name: string;
    public Age: number;
    public Hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]){
        this.Name = name;
        this.Age = age;
        this.Hobbies = hobbies;
    }
}