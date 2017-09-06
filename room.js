
var room = {
 classroom: "F103",
 students: 18,
};

var userInput = prompt("classroom or students?");

var lowercase = userInput.toLowerCase();

window.alert(room[lowercase])