const inputName = document.querySelector("#inputName");
const inputPosition = document.querySelector("#inputPosition");
const inputSalary = document.querySelector("#inputSalary");
const inputSkils = document.querySelector("#inputSkils");
const sendtodatabtn = document.querySelector("#sendtodatabtn");
const showalldatabtn = document.querySelector("#showalldatabtn");
const dataForShow = document.querySelector("#dataForShow");

let data = [];

sendtodatabtn.addEventListener("click", () => {
  let obj = {
    inputName: inputName.value,
    inputPosition: inputPosition.value,
    inputSalary: inputSalary.value,
    inputSkils: inputSkils.value,
  };

  data.push(obj);
  // console.log(`data ${data}`);
  // for (let i = 0; i < data.length; i++) {
  //   console.log(data[i]);
  // }
});

showalldatabtn.addEventListener("click", () => {
  console.log(data, "ads");
  let a = data
    .map((item, index) => {
      return `<div class="card bg-warning" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${item.inputName}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${item.inputPosition}</li>
        <li class="list-group-item">${item.inputSalary}</li>
        <li class="list-group-item">${item.inputSkils}</li>
      </ul>
      </div>
    `;
    })
    .join("");
  dataForShow.innerHTML = a;
});
