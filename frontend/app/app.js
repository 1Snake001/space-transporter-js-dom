import services from "../services/services.js";

async function moveShipHelper(id){
    await services.moveShip(id);
    await fillTable();
   }
   async function toShipHelper(id){
    await services.toShip(id);
    await fillTable();
   }
   
   async function toPlanetHelper(id){
    await services.toPlanet(id);
    await fillTable();
   }
   
   export async function fillTable() {
     const arrayOfPlanetsValue = [];
     const tBody = document.querySelector("tbody");
   
     const planetData = await services.getPlanets();
     const shipData = await services.getShip();
    
     planetData.forEach((planet) => {
       const tr = document.createElement("tr");
       const tdName = document.createElement("td");
       const tdPopulation = document.createElement("td");
       const tdButton = document.createElement("td");
       const tdPassengers = document.createElement("td");
   
       tdName.textContent = planet.name;
       tdPopulation.textContent = planet.population;
   
       if (shipData.planetId === planet._id) {
   
         const buttonToPlanet = document.createElement("button");
         buttonToPlanet.type = "button";
         buttonToPlanet.className = "btn btn-success btn-sm";
         buttonToPlanet.textContent = "« toPlanet";
         buttonToPlanet.addEventListener("click",() => toPlanetHelper(planet._id));
       
         const buttonToShip = document.createElement("button");
         buttonToShip.type = "button";
         buttonToShip.className = "btn btn-success btn-sm";
         buttonToShip.textContent = "toShip »";
         buttonToShip.addEventListener("click",() => toShipHelper(planet._id));
   
         tdButton.appendChild(buttonToPlanet);
         tdButton.appendChild(buttonToShip);
         tdPassengers.textContent = shipData.passengers;
         tr.classList.add("table", "table-dark");
       } else {
         const buttonMoveHere = document.createElement("button");
         buttonMoveHere.type = "button";
         buttonMoveHere.name = "move-ship";
         buttonMoveHere.className = "btn btn-primary btn-sm";
         buttonMoveHere.textContent = "Move here";
         buttonMoveHere.addEventListener("click",() => moveShipHelper(planet._id));
   
         tdButton.appendChild(buttonMoveHere);
         tdPassengers.textContent = "-";
       }
   
       tr.appendChild(tdName);
       tr.appendChild(tdPopulation);
       tr.appendChild(tdButton);
       tr.appendChild(tdPassengers);
   
       arrayOfPlanetsValue.push(tr);
     });
   
     tBody.innerHTML = "";
     arrayOfPlanetsValue.forEach((tr) => {
       tBody.appendChild(tr);
     });
   }
   
   fillTable();