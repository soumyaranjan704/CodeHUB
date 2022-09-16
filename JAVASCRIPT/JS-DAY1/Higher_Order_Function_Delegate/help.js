
class Employee {
    constructor() {
        this.id = 0;
        this.name = '';
        this.age = 0;
    }
}

var test = function () {
    alert('hello');

    let e1 = new Employee();
    e1.id = 10;
    e1.name = 'amar';

    someObjectFunc(e1);

    // e1.name =  // ?

}

var testDeSerialization = function () {
    let valuefromSession = sessionStorage.getItem('mykey');
    let objectArray = JSON.parse(valuefromSession);
    console.log(objectArray);

    // await doSomeTask();
}

let someObjectFunc = function (emp) {
    emp.name = 'vikas';
}

var testSerialization = function () {

    let employees = [];

    let e1 = new Employee();
    e1.id = 0;
    e1.name = 'test';

    let e2 = new Employee();
    e2.id = 1;
    e2.name = 'test2';

    employees.push(e1);
    employees.push(e2);

    let serializedData = JSON.stringify(employees);
    console.log(serializedData);

    let serializedSingleData = JSON.stringify(e2);
    console.log(serializedSingleData);


    let deserializedObject = JSON.parse(serializedData);

    //accepts first params as 'key' and second params (in string format) as 'value'
    sessionStorage.setItem('mykey', serializedData);

    //accepts first params as 'key' and returns null if not there in session storage else return the string format data.
    let data = sessionStorage.getItem('mykey');
}


// setTimeout(function() {
//     //your code to be executed after 1 second
//   }, delayInMilliseconds);


//   let delayInMilliseconds=function(){
//       console.log('inside delay');

//   }
let doSomeTask = async function () {
    //do a tedious task 
    //use await
    //example cud be calling a API 
    while (true) {
        console.log('test');
        setTimeout(() => {
            console.log('waiting');
        }, 5000);
    }
}

let getCurrentDateTime = function () {
    var currentdate = new Date();
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    return datetime;
}

let demo1 = async function () {
    let e1 = new Employee();
    e1.id = 0;
    e1.name = 'test';

    let e2 = new Employee();
    e2.id = 1;
    e2.name = 'test2';

    let dt1 = getCurrentDateTime();
    console.log('just before the async method at :' + dt1.toString());

    //async function
    //let result = await sampleAsyncSumMethod(5, 6);

    //normal function
    let result = await sampleSumMethod(5, 6);


    let dt2 = getCurrentDateTime();
    console.log('result :' + result.toString() + ' at ' + dt2.toString());

    //what will happen ?  *you guys figure this out
    e2 = e1;

    //callByref
    callByref(e2);
};

var demo2 = function () {
    let e1 = new Employee();
    e1.id = 0;
    e1.name = 'test';

    let e2 = new Employee();
    e2.id = 1;
    e2.name = 'test2';

    //what will happen ?  *you guys figure this out
    e2 = e1;

    //callByref
    callByref(e2);
};


var demo = function (delegate) {

    if (delegate != null) {
        delegate();
    }


    let e1 = new Employee();
    e1.id = 0;
    e1.name = 'test';

    let e2 = new Employee();
    e2.id = 1;
    e2.name = 'test2';

    //what will happen ?  *you guys figure this out
    e2 = e1;

    //callByref
    callByref(e2);

    //what will be the value of id of e2 after the function call ?
}

let myTimeout;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleep2(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

var sampleAsyncSumMethod = async function (x, y) {
    myTimeout = setTimeout(x1, 5000);
    return (x + y);
}

var sampleSumMethod = async function (x, y) {
    // sleep(5000);
    await sleep2(5000);
    myTimeout = setTimeout(x1, 5000);
    return (x + y);
}

var x1 = function () {

    let dt3 = getCurrentDateTime();
    console.log('current time :' + dt3.toString());
}


var callByref = function (e) {
    let e3 = new Employee();
    e3.id = 2;
    e3.name = 'test3';

    e = e3;

    //use when u do not know the type and wnat to perform operation in a generic way
    let keys = Object.keys(e3);
    let entries = Object.entries(e3);
    let values = Object.values(e3);


}

//******************** EXAMPLE FOR FUNC DELEGATE OR HIGHER ORDER FUNCTION ****************** */
var funcDelegate1 = function () {

    console.log('inside function delegate1');
}

var funcDelegate2 = function (test) {

    console.log('inside function delegate2');
}

var testDelegate = function () {
    //case 1  (calling 'testDemoDelegate' by passing 12, funcDelegate1, funcDelegate2)
    testDemoDelegate(12, funcDelegate1, funcDelegate2);

    //case 2  (calling 'testDemoDelegate' by passing 8, funcDelegate1, funcDelegate2)
    testDemoDelegate(8, funcDelegate1, funcDelegate2);
}

var testDemoDelegate = function (somevalue, delegate1, delegate2) {
    //demo of func delegate
    if (somevalue > 10) {
        delegate1();
    }
    else {
        delegate2('test2');
    }
}
//********************** END OF FUNC DELEGATE *****************************************************/

//BLOCK SCOPE 

var blockScopeSample = function (x) {
    var valueTop = 10;

    if (x == 10) {
        let value1 = 5;
        var valueTop2 = 10;
        //Till what point I can access value1 ?

        valueTop = "abc"; //is it valid  ?
        value1 = "xyz";  //is it not valid ?
    }
    //here ?
    //valueTop2 ?
}

/*
1. Function Delegates and its usages. (higher order functions)  
2. Block Scope & Execution Context. -->  { } for, loop   [self practise ]
3. Call by Ref & Call by Value.  string/int (primitive types)[value] vs object types[reference] function[reference]  [Practise]

4. var vs let vs const .   [done]
5. Object.keys, Object.value & Object.entries 
    --> Usage of these  Syntax 
        --> Object.keys(<your object from where you want to read all keys from all properties>)
        --> Object.values(<your object from where you want to read all values from all properties>)
        --> Object.entries(<your object from where you want to read all keys & values from all properties>)

6. Serialization (JSON.parse, JSON.stringify) JSON.parse --> converts string to either array or object and JSON.stringify--> vice versa.

7. Storages(local/session)  . 
==> SELF RATE YOUR SELF


8. Debouncing & throttling  --> Exercise to try --> sleep, function deletgate to hold the call 
    examples --> when the user continously clicks on a button we retrict using time of 3 or 4 sec as per our convenient 
        and only then we accept the next call

        For textbox where the user types (keyup event) we wait for given seconds before we make the API or next level call.

9. async/await. --> Does not block the main thread and works on background thread 
10. Creation of Objects from Classes 
    class Employee{
        constructor(){
            this.id=0;
            this.name = ''
        }
    }
    let emp = new Employee();
11. Event handlers & Event listener
    Event handlers --> <input id="inputText"  type="text" onkeyup="keyupmethod()"/>  --> keyupmethod is the event function that is called when keyup happens

    Event listener --> (use this only when the DOM is ready)
    document.getElementbyId('inputText').addEventListner('onkeypress',function(){
    });



    
12. Iterations on Arrays
13. JSON --> Javascript Object Notation
    {
      "proper1": "properValue",

    }
    --> Typical 'Employee' Object being serialied into JSON
    {
        "id":5,
        "name":"some name"
    }
14. String functions of JS --> length, splice, substring, inddexOf etc

15. JS Date functions  --> let dt = new Date(); 

16. Sockets  --> socket.io (STUDY HOME WORK)


*/