//Domdaki elementleri almak için querySelector kullanılır.

let btn = document.querySelector("#liveToastBtn");
let list = document.querySelector("#list");
let input = document.querySelector("#task");
let ulLength = document.getElementsByTagName("li");

for (let i = 0; i < ulLength.length; i++) {
  let closeButton = document.createElement("span");
  closeButton.textContent = "\u00D7";
  closeButton.classList.add("close");
  closeButton.onclick = removeButton;
  ulLength[i].append(closeButton);
  ulLength[i].onclick = check;
}

btn.addEventListener("click", addTodo);

function check() {
  this.classList.toggle("checked");
}

function removeButton() {
  this.parentElement.remove();
}

function addTodo() {
  if (input.value == "") {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");

    let createLi = document.createElement("li");
    list.appendChild(createLi);
    createLi.innerHTML = task.value;
    input.value = "";

    createLi.onclick = check;

    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;

    createLi.append(closeButton);
    list.append(createLi);
    input.value = "";
  }
}
