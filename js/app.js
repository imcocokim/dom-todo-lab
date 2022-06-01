/* cache elements */
const inp = document.querySelector("#input")
const btn = document.querySelector("#submit-button")
const toDoList = document.querySelector("#todo-list")


/* event listeners */
btn.addEventListener('click', evt)

/* functions */
function evt() {
  const li = document.createElement("li")
  console.log(li)
  li.textContent = inp.value
  document.querySelector('ul').appendChild(li)
  inp.value = ' '
}