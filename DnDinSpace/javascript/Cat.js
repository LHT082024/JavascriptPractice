//fetching html document
const names = document.querySelector("#Name")
const age = document.querySelector("#Age")
const occupation = document.querySelector("#Occupation")
const ship = document.querySelector("#Ship")



//fetching Json
//placing json objects inside html tags
fetch("/DnDinSpace/Json/cat.json")
  .then((res) => res.json())
  .then((data) => {
    names.innerText = "Name: " + data.fullname + "||" + " Designation: " + data.designation;
    age.innerText = "Age: " + data.age;
    occupation.innerText = "Occupation: " + data.currentOccupation
    ship.innerText = "Ship: " +  data.campaginShip;
  })
  // .catch((err) => console.error("Failed to load JSON:", err));
// fetch("./Json/foxy.json")


