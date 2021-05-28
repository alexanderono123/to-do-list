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

    if(to_do_string) {
        let ul = document.getElementById("list");

        let li = document.createElement("li");
        li.className = "todo-unfinished";
        li.setAttribute('onclick', "toggleTodo(this)");

        let a = document.createElement('a');
        a.setAttribute('onclick', "removeTodo(this.parentElement)");
        a.setAttribute('href', "#!");

        let i = document.createElement('i');
        i.className = "fas fa-trash fa-2x";

        let p = document.createElement('p');
        p.innerText = to_do_string;
        
        li.appendChild(p);
        li.appendChild(a);
        a.appendChild(i);
        ul.appendChild(li);

        document.getElementById("todo").value = "";
    } else {
        console.log("Null input");
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