const input = document.getElementById("input");
const btn = document.querySelector(".btn");
const showTodo = document.querySelector(".showTodo");


let json = []

let index = 0;
let todos = JSON.parse(localStorage.getItem("todos"));

if(todos != null){
  index = -1
  todos.forEach(todo=>{
    index++;
    addTodo(todo.text)
    json.push({ id: index, text:todo.text })
    localStorage.setItem("todos",JSON.stringify(json))
  });
}

function addTodo(value){
    let p = document.createElement("p");
    let deletebtn = document.createElement("span");
    deletebtn.classList.add("delete");
    let deleteText = document.createTextNode('delete');
    deletebtn.appendChild(deleteText)
    p.innerHTML = value;
    showTodo.appendChild(p);
    p.appendChild(deletebtn);
    let all_P = document.querySelectorAll('p')
  all_P.forEach((p,i)=>{
    p.querySelector('.delete').addEventListener('click',()=>{
      let filterdata = todos.filter((todo,i)=>{
       return todo.id !== i
      })
      p.remove();
    localStorage.setItem("todos",JSON.stringify(filterdata))
   })
  })
  }
  
  

btn.addEventListener("click",() => {
  addTodo(input.value);
   todos = localStorage.getItem("todos");
  showData(input.value)
  input.value = " "
});

function showData(value){
    if (todos == null) {
        index = 0;
        json.push({ id: index, text: value });
        localStorage.setItem("todos", JSON.stringify(json));
      } else {
        index++;
        json.push({ id: index, text: value });
        localStorage.setItem("todos", JSON.stringify(json));
      }
}



