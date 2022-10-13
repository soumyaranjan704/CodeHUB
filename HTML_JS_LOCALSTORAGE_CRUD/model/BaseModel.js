// **************BaseModel Class************** 
/** 
1. The BaseModel class is the base class for all models.
2. The constructor method is called when an instance of the class is created.
3. The id property is set to 0.
*/

class BaseModel{
    constructor(){
        this.id = 0
     }
};
// **************Employee*********************/

/*
1. The EmployeeModel class extends the BaseModel class.
2. The constructor method is used to initialize the name and age properties.
3. The name and age properties are set to the values passed in to the constructor method.
4. The BaseModel class is used to initialize the id property.
*/

export class EmployeeModel extends BaseModel{
    constructor(name,age){
        super()
        this.name  = name;
        this.age = age;
    }
}
// **************Department*********************/
/**
1. The DepartmentModel class extends the BaseModel class.
2. The constructor function takes a name and assigns it to the dep_name property.

*/
export class DepartmentModel extends BaseModel{
    constructor(name){
        super()
        this.dep_name  = name;
    }
}

export default BaseModel ;