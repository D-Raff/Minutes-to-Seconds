// function

const btnCalc = document.querySelector("[data-calc]");

function Calculate() {
  let input = +document.querySelector("[data-mins]").value;

  let output = document.querySelector("[data-res]");

  let res = input * 60;
  console.log(res);
  output.textContent = `that is ${res} seconds!`;
}

btnCalc.addEventListener("click", Calculate);
