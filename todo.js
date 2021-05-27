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
        li.appendChild(document.createTextNode(to_do_string));
        ul.appendChild(li);
        document.getElementById("todo").value = "";
    } else {
        console.log("Null input");
    }
    
    return;
}