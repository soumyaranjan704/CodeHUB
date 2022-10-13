# Employee Department CRUD Operation Using Localstorage

## This Project will give some idea about Class Inheritance, File Organization, Local Storage,Styling , Structuring Layout

<hr>
 <h2>This Project Contains 6 Folders </h2>
    1. <strong>Images</strong> <br>
    2. <strong>Model</strong> <br>
    3. <strong>Implementation</strong> <br>
    4. <strong>Pages</strong> <br>
    5. <strong>Scripts</strong><br>
    6. <strong> README.md </strong>
<hr>

> ## Image Folder
- All Pages structure with outputs.

> ## Model Folder

- This is Made Up of BaseModel of the States or attributes which we are going to use in folder
- Where we have two  more Classes  EmployeeModel and DepartmentModel which are also Inheriting From Base Model.
- Need to follow this link `https://javascript.info/class-inheritance` to know about the class inheritance.

> ## Implementation Folder
Inside Folder those files are there.
- 1.BaseImplementation
- 2.DepartmentImpementation
- 3.EmployeeImplementation

 - BaseImplementation -> All the Related Function are Defined here

- DepartmentImplementation -> All the Related Function related to Department and also Inheriting from BaseImplementation  

- EmployeeImplementation -> All the Related Function related to Employee and also Inheriting from BaseImplementation  
   <br>


 > ## Pages
 - Inside this folder all the .html files added.
 - All the pages are built using Html and css. 
> Note: Internal CSS is Used

<br>

> ## Scripts

## Inside this folder all .js file plays different role . Check below
- Consist of multiple Files to do all the Rendering, UI Stuff, Pagination , Utility Functions
- Made up of 9 Files:
  - <u>common.js</u> : This Files Is Just for Doing Drop Down Animation for Menu. Now  we are not using this we are just using li links for better understand.
  - <u>departmentAdd.js</u> : IT tells us how to add Department in the List
  - <u>DepartmentEdit.js</u> : it take ID From Url to Edit the Data inside our Local Storage
  - <u> DepartmentList</u> : Create TableFor Department and also made with UI EventListener for Edit and Delete button
  - <u>EmployeeAdd.js</u> : IT tells us how to add Employee in the List
  - <u>EmployeeEdit.js</u> : it take ID From Url to Edit the Data inside our Local Storage
  - <u> EmployeeList</u> : Create TableFor Employee and also made with UI EventListener for Edit and Delete button
  - <u>Pagination.js</u> : Pagination Functionality added here.
  - <u>Utility.js</u> : this is some Utility Function Which are common in Files, Like  CreateTable, URlDecoder, checkAttribute  
  - can be Use Directly via importing  


  ## How to run this project
  After Download /clone the repository then you need to follow the details:
  - 1. You need to install this `live server(five server) by Yannick `extension on your VS CODE. NB.Without live server extension you can't run this project.
  - 2. After that open that folder then open the pages folder >  `index.html` > right click on index.html file > open with five server  option will  be there then it will open in your browser.
  

  ## Some important links to read 
  - 1. Class Inheritance- `https://javascript.info/class-inheritance`
  - 2. Localstorage - `https://www.geeksforgeeks.org/javascript-localstorage/#:~:text=The%20localStorage%20is%20the%20read,that%20is%20stored%20within%20localStorage`.