
//fetching api
fetch("./cat.json")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("Ship").innerText = "ship: " +  data.currentOccupation;
  })
  .catch((err) => console.error("Failed to load JSON:", err));

// document.getElementById("Name").innerHTML = fullname + " designation: " + designation;
// document.getElementById("Age").innerHTML = age;
// document.getElementById("Occupation").innerHTML = currentOccupation;



