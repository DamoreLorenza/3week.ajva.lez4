// const numeri =[ 

// ]




// const createTombola = function(numberOfTombola){

// const tombolaDiv = document.getElementById("scheda-tombola")

// for( let i=0; i < numberOfTombola; i++){



// const tombolaCellDiv= document.createElement("div")

// tombolaCellDiv.classList.add("celle-tombola")

// const deiTd= document.getElementsByTagName(" table tr td")[0]
// deiTd.addEventListener("click", function(e){


// })

// // const cellValue= document.createElement("h3")
// // cellValue.innerText = i + 1

// // tombolaCellDiv.appendChild(cellValue)
// // tombolaDiv.appendChild(tombolaCellDiv)

// }

// }

// const getNumber= function(){

// const randomNumber= Math.floor(math.random()*77);

// const selezNumber = document.getElementsByTagName("button")[0];

// selezNumberArray = Array.from(selezNumber)

// selezNumberArray.array.forEach(element => {

//     randomNumber
    
// });

// }

// createTombola()





const createTombola= function(){

    const tom = document.getElementById("scheda-tombola")

for (let row=1; row<= 7; row++){
    const rowElement = document.createElement("tr")
}
for (let col=1; col <= 19; col++){
    const number = (row-1) * 10 + col;
    const cell = document.createElement("td");
    cell.textContent = number;
    rowElement.appendChild(cell);
}
tbody.appendChild(rowElement)

}

createTombola()