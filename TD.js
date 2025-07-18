let inputbox = document.querySelector("#box");
let addbtn = document.getElementById("add-btn");
let ul = document.querySelector("#tasklist");


addbtn.addEventListener("click",addfunction);

inputbox.addEventListener("keypress", function(e){
        if(e.key === "Enter") {
            addfunction();
        }
    });

function addfunction(){
    let tasktext = inputbox.value.trim();
    if(tasktext === "") return;

    
    
    let li = document.createElement("li");
    li.textContent = tasktext;

    let deletebtn = document.createElement("button");
    deletebtn.textContent = "X";
    deletebtn.className = "delete-btn";

   deletebtn.onclick = function(){
    removefunction(this);
   };
    
    li.appendChild(deletebtn);
    ul.appendChild(li);
    inputbox.value = "";

}

function removefunction(button){
    button.parentElement.remove();
}