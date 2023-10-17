let form= document.getElementById("form");
let textInput= document.getElementById("textInput");
let msg= document.getElementById("msg");
let textarea= document.getElementById("textarea");
let dateInput= document.getElementById("dateInput");
let tasks= document.getElementById("tasks");
let add=document.getElementById("add");

form.addEventListener("submit" , (e) => {

    e.preventDefault();
    fromvalidation();
});    

let fromvalidation = () => {

    if(textInput.value === "")
    {
        msg.innerHTML = "Task can not be black "
    }
    else{
        msg.innerHTML = "";
        acceptData();
        add.setAttribute("data-bs-dismiss" , "modal");
        add.click();
// IIFE (immigatilly invoke fuction )
        ( ()=>{
            add.setAttribute("data-bs-dismiss" , "");
        }
        )();

    }
}

let data= {}

let acceptData = () => {

     data["text"] = textInput.value;
     data["date"] = dateInput.value;
     data["description"] = textarea.value;
     createtask();
     
};

let createtask = () => {

    tasks.innerHTML +=`<div>
    <span class="fw-bold">${data.text}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.description}</p>
    <span class="options">
        <i onClick = "edittask(this)" data-bs-toggle="modal" data-bs-target="#form" class = "fa fa-edit"></i>
        <i onClick = "deletetask(this)" class="fa fa-trash-alt"></i>
    </span>
   </div>`

resetfrom();
}
    let deletetask  = (e) => {
        e.parentElement.parentElement.remove();
      
    }
 let   edittask = (e) => {
    let selectedTask = e.parentElement.parentElement;
    textInput.value =selectedTask.children[0].innerHTML;
    dateInput.value =selectedTask.children[1].innerHTML;
    textarea.value =selectedTask.children[2].innerHTML;

    selectedTask.remove();
    }


let resetfrom = () => {
    textInput.value ="";
    dateInput.value ="";
    textarea.value ="";
}
