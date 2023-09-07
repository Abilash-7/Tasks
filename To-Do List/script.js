const task=document.getElementById('input');
const listContainer=document.getElementById('list-container');
const errormsg=document.getElementById('error');
const count=document.getElementById('pending');

let pending=0;
const displayCount = (pending) =>{ count.innerHTML=pending};
function addTask(){
    
    if(task.value === "")
        {
            errormsg.style.display="block";
            setTimeout(() => {errormsg.style.display="none";},1000);
        }
    else{
        let li=document.createElement("li");
        li.innerHTML=task.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
    pending +=1;
    displayCount(pending);
    }   
    task.value="";
    savaData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");

        savaData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        pending -=1;
        displayCount(pending);
        savaData();
    }
},false);

function savaData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();