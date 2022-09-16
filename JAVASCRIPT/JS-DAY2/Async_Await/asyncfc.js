async function myDisplay() {// Async functions will always return a value.
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I love You !!");}, 3000); //after waiting 3000 sec "I love You "message will show
    });
    document.getElementById("demo").innerHTML = await myPromise;//We use await to wait and handle a promise.
  }
  
  myDisplay();