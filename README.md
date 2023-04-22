# NLB_Assessment
NLB Assessment dotnet_Angular


The Solution consists of 

1) Web API project under `API/Students.API` Folder which is dotnet 6.0 Web API project with Docker enabled, 
2) Angular 15 CLI App under `App/StudentsApp` Folder

# Steps to Build:
## Students.API:

1) Please ensure dotnet 6.0 is installed or Visual studio 2022 is installed.
2) Visual studio 2022 can be used to build and run the API. Please ensure "IIS Express" is chosen while "Running the Application" instead of Docker if docker is not installed as it is not a mandatory requirement.

![image](https://user-images.githubusercontent.com/6443053/233757452-ca83846f-2487-40a8-ba5a-9e8e4d5c8d40.png)


3) Alternatively Use `dotnet build` command to build the application and `dotnet run` to  run the API
4) This should bring up the `Open API (Swagger UI) page as below`

![image](https://user-images.githubusercontent.com/6443053/233757492-a0492360-e612-4039-b2b2-f09851f80b35.png)


##Students.App:

1) Please ensure below versions for Angular CLI, Node and npm is isntalled in the machine where the App is to be build.

Angular CLI: 15.2.6
Node: 18.16.0
Package Manager: npm 9.5.1

2) Open the `~\NLB_Assessment\App\StudentsApp` Folder in Visual Studio Code (Recommended) or any other IDE
3) Open terminal to this root folder and below commands

a) npm install (or) npm i
b) npm start

4) this should run the Angualr App under port 4200 
5) Open a browser and navigate to `http://localhost:4200/` and it will bring the Student APP as below

![image](https://user-images.githubusercontent.com/6443053/233757739-7fe288f0-7765-424c-a31c-9dfb06dddc07.png)


#Note:

Please run both the API and App in the same machine to get this working as of now I've configure the API to run under `https://localhost:44363` (Swagger URI: https://localhost:44363/swagger/index.html) and the Angualr APP is harcoded with the url `https://localhost:44363/data` to query the data. This can be moved to configuration (`Environment`) later.

