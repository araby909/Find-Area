var Araby = {
 fName:"Araby",
 lName:"Clark",
 age:15,
 grade:11,
 friends:["Kenley","Sam","Mark"]
};
var Mark = {
 fName:"Mark",
 lName:"Ordinado",
 age:16,
 grade:11,
 friends:["Araby","Sam","Kenley"]
};
var Sam = {
 fName:"Sam",
 lName:"Salameh",
 age:16,
 grade:11,
 friends:["Araby","Kenley","Mark"]
};
var Kenley = {
 fName:"Kenley",
 lName:"Laquihon",
 age:16,
 grade:11,
 friends:["Araby","Sam","Mark"]
};
var x = [Araby,Mark,Sam,Kenley];
window.alert(x[1].friends[0]);
