const input = document.getElementById("input");
const btn = document.querySelector(".btn");
const showTodo = document.querySelector(".showTodo");
let json = [];
let index = 0;
let str = " ";





let todos = JSON.parse(localStorage.getItem("todos"));
if(todos){
     index = -1
    todos.forEach(element =>{
      index++;
      json.push({id:index,text:element.text});
      localStorage.setItem("todos",JSON.stringify(json))
      str += `<p>${element.text}<span onclick="deleteTodo(${element.id})" class="delete">Delete</span><span class="Edit" onclick="EditTodo(${element.id})">Edit</span></p>`
    });
    showTodo.innerHTML = str;
  }

  // add Event Listener click
btn.addEventListener("click", () => {
 if(btn.innerHTML === "Add"){
  str += `<p>${input.value}<span onclick="deleteTodo(${index})" class="delete">Delete</span><span onclick="EditTodo(${index})" class="Edit">Edit</span></p>`
  showTodo.innerHTML = str;
  setLocalValues();
  input.value = " ";
 }  
});
function setLocalValues(){
  todos = localStorage.getItem("todos");
  if(todos == null){
    index = 0;
    json.push({id:index,text:input.value});
    localStorage.setItem("todos",JSON.stringify(json))
  }
  else{
    index++;
    json.push({id:index,text:input.value});
    localStorage.setItem("todos",JSON.stringify(json));
    
  }
}

function deleteTodo(i) {
  json.splice(i,1);
  localStorage.setItem("todos",JSON.stringify(json))
}
function EditTodo(i){
  let EditInputValue = json.findIndex(element=>element.id === i);
  // console.log(i,EditInputValue);
   input.value = json[EditInputValue].text;
   
   let findData = json.find((element,index)=>element.text === input.value);
  btn.innerHTML = "Edit";
  btn.addEventListener('click',()=>{
   if(btn.innerHTML === "Edit"){
     let replacement = {...findData,text:input.value};
     json.splice(i,1,replacement);
     localStorage.setItem("todos",JSON.stringify(json))
   }
  })
  
}











