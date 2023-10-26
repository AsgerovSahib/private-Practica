const addInput = document.querySelector("#numberInput");
const addInputbtn = document.querySelector("#makeNegativNumberbtn");
const endRezult = document.querySelector("#result")
function makeNegativNumber(number) {
  if (number > 0) {
    number = number * -1;
  }
  return number;
}
console.log(makeNegativNumber(5));

// addInputbtn.addEventListener("click", function a{

// })

addInputbtn.addEventListener("click", function () {
  console.log(makeNegativNumber(addInput.value));
  endRezult.innerHTML=makeNegativNumber(addInput.value)
});
