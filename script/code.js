// function

// creating a variable for the button to add event listener later
const btnCalc = document.querySelector("[data-calc]");

//creating the function to convert the minutes to seconds
function Calculate() {
    //declare a variable for the value of the input
    let input = +document.querySelector("[data-mins]").value;
    
    //declare a variable for the text content to output to
    let output = document.querySelector("[data-res]");
    
    //declare a variable for the calculation to display
  let res = input * 60;
  console.log(res);
  output.textContent = `that is ${res} seconds!`;
}

//adding an event listeneer to the button and calling the function
btnCalc.addEventListener("click", Calculate);
