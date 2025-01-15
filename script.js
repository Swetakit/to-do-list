const InputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("List Container");
function addTask() 
{
    if (InputBox.value === '') 
    {
        alert("Write Something!!!");
    }   
    else
    {
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        ListContainer.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    } 
    InputBox.value = "";
    saveDatas();
}
ListContainer.addEventListener("click", function(e)
{
    if (e.target.tagName === "LI") 
    {
        e.target.classList.toggle("check");
        saveDatas();        
    }
    else if (e.target.tagName === "SPAN") 
    {
        e.target.parentElement.remove();   
        saveDatas();
    }
},false);
function saveDatas()
{
    localStorage.setItem("data", ListContainer.innerHTML);
}
function showTask()
{
    ListContainer.innerHTML = localStorage.getItem("data");
}
showTask();
