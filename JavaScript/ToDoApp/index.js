console.log("yes start !!!");

let todoList = [
    // {
    //     item:'buy milk',
    //     dueDate:'27/03/2024'
    // }
];

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let inputElementDate = document.querySelector("#todo-date");

  let todoItem = inputElement.value;
  let todoItemDate = inputElementDate.value;
  if(todoItem==='' || todoItemDate===''){
    alert("please enter all values");
    return;
  }

//   console.log(todoItem + " , " + todoItemDate);

  todoList.push({item : todoItem, dueDate : todoItemDate});
  localStorage.setItem('todoList',JSON.stringify(todoList));
  inputElement.value = '';
  inputElementDate.value = '';
  console.log(todoList);
  displayTodoItems();
}

function displayTodoItems() {
    todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  let displayitemContainer = document.querySelector(".todo-container");
  

  let newHtml = "";
  if(todoList.length===0){
    displayitemContainer.innerHTML = newHtml;
    return;
  }

  // displayitem.innerHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    // let todoItem  = todoList[i].item;
    // let todoItemDate = todoList[i].dueDate;
    let {item,dueDate} = todoList[i];
    // newHtml += `
    //     <span>${item}</span>
    //     <span>${dueDate}</span>
    //     <button class="btn-delete" id=${i} onclick="todoList.splice(${i},1);displayTodoItems();">Delete</button>
    //     `;

    newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" id=${i} onclick="deleteTodoItem(this.id)">Delete</button>
        `;

    // displayitem.innerHTML = displayitem.innerHTML + "<br>" + todoList[i];
    displayitemContainer.innerHTML = newHtml;
  }
}
displayTodoItems();


function deleteTodoItem(a){
    // console.log("id",todoList);
    // if(a===todoList.length)
    //     todoList.pop();
    // else
    todoList.splice(a,1);
    localStorage.setItem('todoList',JSON.stringify(todoList));
    displayTodoItems();
}
