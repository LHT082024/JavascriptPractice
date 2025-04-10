
const fullname = "C11A7321T";
const designation = "CAT";
let age = 5;
let previousOccupations = ["Testing subject for robot spec ops divison", "reserve military personal for spec ops", "Political assassin"];
const campaginShip = "PlaceholderName"
let currentOccupation = "Chef on the ship: " + campaginShip;


fetch("./test.json")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("Ship").innerText = "ship:" +  data[0];
  })
  .catch((err) => console.error("Failed to load JSON:", err));

document.getElementById("Name").innerHTML = fullname + " designation: " + designation;
document.getElementById("Age").innerHTML = age;
document.getElementById("Occupation").innerHTML = currentOccupation;



