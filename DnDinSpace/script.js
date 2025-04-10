//fetching html document
const ship = document.querySelector("#Ship")


//fetching Json
fetch("./Json/cat.json")
  .then((res) => res.json())
  .then((data) => {
    ship.innerText = "ship: " +  data.currentOccupation;
  })
  .catch((err) => console.error("Failed to load JSON:", err));

// document.getElementById("Name").innerHTML = fullname + " designation: " + designation;
// document.getElementById("Age").innerHTML = age;
// document.getElementById("Occupation").innerHTML = currentOccupation;



