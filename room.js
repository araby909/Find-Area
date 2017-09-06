
var room = {
 classroom: "F103",
 students: 18,
};

var userInput = prompt("classroom or students?");

var lowercase = userInput.toLowerCase();

window.alert(room[lowercase])


//if else statment

var room = {
 classroom: "F103",
 students: 18,
};

var userInput = prompt("classroom or students?");

var lowercase = userInput.toLowerCase();

if (lowercase == "students" || lowercase === "classroom")

(window.alert(room[lowercase]))

else(window.alert("Please enter classrom or students"))
