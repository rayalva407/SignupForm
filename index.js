const formMain = document.querySelector(".main")
const form = document.querySelector(".form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector("#username").value;
  const occupation = document.querySelector("#occupation").value;
  const country = document.querySelector("#country").value;
  const p = document.createElement("p");
  
  result.appendChild(p);
  p.innerText = `${occupation} from ${country}, ${username}`;
  formMain.setAttribute("id", "hidden");
  result.removeAttribute('id');
  form.reset();
})