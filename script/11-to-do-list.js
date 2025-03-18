const todolist = [{
    name:'make',
    dueDate:'2022-12-22'},
    {
        name:'make',
        dueDate:'2022-12-22'}

];

rendertodolist();
function rendertodolist(){
    let todolistHTML = '';
    for(let i = 0; i<todolist.length;i++){
        const todoObject = todolist[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const{name} = todoObject;
        const{dueDate}= todoObject;
        console.log(dueDate);
        const html = `<p>
        ${name}    ${dueDate} 
        <button onclick="todolist.splice(${i},1);
        rendertodolist()">
        Delete
        </button>
        </p>`;
        todolistHTML += html;
    }

    console.log(todolistHTML);

    document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}
function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-duedate-input');
    
    const name = inputElement.value;
    const dueDate = dateInputElement.value;
   
    todolist.push({name,dueDate});
    console.log(todolist);

    inputElement.value = '';
    rendertodolist();
}