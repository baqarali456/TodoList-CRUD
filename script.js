const input = document.getElementById("input");
const btn = document.querySelector(".btn");
const showTodo = document.querySelector(".showTodo");

let index = 0;
let str = " ";

const onDelete = (i) =>{
  let todos = JSON.parse(localStorage.getItem("todos"));
  todos = todos.filter(todo=>todo.id !== i);
  localStorage.setItem("todos",JSON.stringify(todos));
  showTodos()
}

const onEdit = (i) =>{
  let todos = JSON.parse(localStorage.getItem("todos"));
  console.log(i);
  
  // show edit data in input
  
  let find_Data_forEdit = todos.findIndex(todo=>todo.id === i);
  input.value = todos[find_Data_forEdit].text;
  
  // find data from input
  let findInputData = todos.find(todo=>todo.text === input.value);
  console.log(findInputData);
  
  btn.innerHTML = "Edit";
  btn.addEventListener('click',()=>{
   if(btn.innerHTML === "Edit"){
     todos = JSON.parse(localStorage.getItem("todos"));
     let replacedata = {...findInputData,text:input.value};
     console.log(replacedata);
     todos.splice(find_Data_forEdit,1,replacedata);
     localStorage.setItem("todos",JSON.stringify(todos));
     showTodos()
     input.value = "";
   }
  })

  
  
}

const showTodos = () =>{
  showTodo.innerHTML = "";
let todos = JSON.parse(localStorage.getItem("todos"));
if(todos){
  todos.forEach(todo=>{
    str = `<p>${todo.text} <i onclick="onDelete(${todo.id})" class=" delete fa-solid fa-delete-left"></i> <i onclick="onEdit(${todo.id})" class="Edit fa-solid fa-file-pen"></i></p>`
    showTodo.innerHTML += str
  })
} 
else{
  showTodo.innerHTML = "No Todos Here";
}
}
showTodos()



btn.addEventListener('click',()=>{
  if(btn.innerHTML == "Add"){
    let todos = localStorage.getItem("todos");
    if(todos == null){
     let json = [];
     index = 0;
     json.push({id:index,text:input.value});
     localStorage.setItem("todos",JSON.stringify(json))
    }
    else{
     let json = JSON.parse(localStorage.getItem("todos"));
     index++;
     json.push({id:index,text:input.value});
     localStorage.setItem("todos",JSON.stringify(json))
    }
    showTodos()
    input.value = "";
  }
})
















