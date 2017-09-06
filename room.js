
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



//Ask until user gets it correct

var room = {
 classroom: "F103",
 students: 18,
};

var userInput = prompt("classroom or students?");

var lowercase = userInput.toLowerCase();

if (lowercase == "students" || lowercase === "classroom"){
(window.alert(room[lowercase]))
}
else {
 askAgain();
}

function askAgain()  {

var userInput = prompt("classroom or students?");

var lowercase = userInput.toLowerCase();

if (lowercase == "students" || lowercase === "classroom"){
(window.alert(room[lowercase]))
}

else {
askAgain();
 }
}

//stop after 4 attempts
var room = {
 classroom: "F103",
 students: 18,
};

var userInput = prompt("classroom or students?");
var lowercase = userInput.toLowerCase();
if (lowercase === "students" || lowercase === "classroom"){
window.alert(room[lowercase]);
}
else {
 for(i = 0; i < 3; i++) {
 var userInput = prompt("classroom or students?");
var lowercase = userInput.toLowerCase();
if (lowercase === "students" || lowercase === "classroom"){
 i = 3;
window.alert(room[lowercase]);
  }
 }
}





// tell user how much tries left

var room = {
 classroom: "F103",
 students: 18,
};

var userInput = prompt("classroom or students?");
var lowercase = userInput.toLowerCase();
if (lowercase === "students" || lowercase === "classroom"){
window.alert(room[lowercase]);
}
else {
 for(i = 1; i < 3; i++) {
 var userInput = prompt("classroom or students? You have tried " + i + " times");
var lowercase = userInput.toLowerCase();
if (lowercase === "students" || lowercase === "classroom"){
 i = 3;
window.alert(room[lowercase]);
  }
 }
}
