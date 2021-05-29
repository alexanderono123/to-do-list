let input = document.getElementById("todo");
if(input){
    input.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            addTodo();
        }
    });    
}


function addTodo(){
    let to_do_string = document.getElementById("todo").value;

    if(!to_do_string) {
        console.log("Null input");
        return;
    } else {
        let ul = document.getElementById("list");
        let li = newTodoListElement();
        let a = newTodoAnchorElement();
        let i = newTodoIdiomaticElement();
        let p = newTodoParagraphElement(to_do_string);
        
        appendElements(ul, li, a, i, p);

        clearInput();
    }
    return;
}

function removeTodo(e){
    let parent = e;
    console.log(e);
    parent.parentNode.removeChild(parent);
    console.log('removed');
}

function toggleTodo(e){
    console.log(e);
    if(e.className == "todo-unfinished"){
        e.className = "todo-finished";
    } else {
        e.className = "todo-unfinished"; 
    }

}

function newTodoListElement(){
    let li = document.createElement("li");
    li.className = "todo-unfinished";
    li.setAttribute('onclick', "toggleTodo(this)");
    return li;
}

function newTodoAnchorElement(){
    let a = document.createElement('a');
    a.setAttribute('onclick', "removeTodo(this.parentElement)");
    a.setAttribute('href', "#!");
    return a;
}

function newTodoIdiomaticElement(){
    let i = document.createElement('i');
    i.className = "fas fa-trash fa-2x";
    return i;
}

function newTodoParagraphElement(string){
    let p = document.createElement('p');
    p.innerText = string;
    return p;
}

function appendElements(ul, li, a, i, p){
    li.appendChild(p);
    li.appendChild(a);
    a.appendChild(i);
    ul.appendChild(li);
    return;
}

function clearInput(){
    document.getElementById("todo").value = "";
    return;
}