// This JavaScript file will handle the custom attributes which will be accessed using getAttribute().
//  We will use this to create an alert whenever a list item is clicked. The JavaScript code looks like this:


function showPosition(runner) {
	var position = runner.getAttribute("data-position");// it returns the value of a specified attribute on the element
	alert("The " + runner.innerHTML + " is " + position + "."); //showing a alert message and the items position
}




// Whenever an item is clicked this code snippet will be triggered. Here we will alert the
//  type of food that is stored in the custom attribute using the dataset property.
// The code snippet looks like this:

function handleFood(food) {
	var foodType = food.dataset.foodType;
	alert(food.innerHTML + " is " + foodType +".");
}
