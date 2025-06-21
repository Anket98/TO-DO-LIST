function addfunction(){
    let inputbox = document.querySelector("#box");
    let tasktext = inputbox.value.trim();
    if(tasktext === "") return;
    
    let li = document.createElement("li");
    li.innerHTML =`${tasktext}
    <button onclick="removefunction(this)" class= "li-btn">del</button>`
    let ul = document.querySelector("#tasklist");
    ul.appendChild(li);
    inputbox.value = "";

}

function removefunction(button){
    button.parentElement.remove(this);
}