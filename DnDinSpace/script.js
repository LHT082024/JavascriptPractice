//fetching html document
const names = document.querySelector("#Name")
const age = document.querySelector("#Occupation")
const ship = document.querySelector("#Ship")



//fetching Json
fetch("./Json/cat.json")
  .then((res) => res.json())
  .then((data) => {
    names.innerText = "name: " + data.fullname + "||" + " designation: " + data.designation;
    age.innerText = "age: " + data.age;
    ship.innerText = "ship: " +  data.currentOccupation;
  })
  .catch((err) => console.error("Failed to load JSON:", err));

// document.getElementById("Name").innerHTML = fullname + " designation: " + designation;
// document.getElementById("Age").innerHTML = age;
// document.getElementById("Occupation").innerHTML = currentOccupation;



