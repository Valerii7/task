var mass__task = [];
getLocal();
document.getElementById("main__btn").addEventListener("click", function(e)
{
    var title = document.getElementById("title");
    var text = document.getElementById("task");
    
    var tasks = {
        title:title.value,
        text:text.value,
    }

    title.value= "";
    text.value= "";
    mass__task.push(tasks);
    console.log(mass__task);
   
    show();
    saveLocal();
    e.preventDefault();
})

function show()
{
    var list__tasks = document.getElementById("list__tasks");
    let out = "";
    mass__task.forEach(item=>
    {
        out+=`<div class="list">
        <div class="list__title"><h1>${item.title}</h1></div>
        <div class="list__task">${item.text}</div>
        </div>`
    })
    list__tasks.innerHTML = out;
}
function saveLocal()
{
    localStorage.setItem("mass__task",JSON.stringify(mass__task));
}
function getLocal()
{
    if(localStorage.getItem("mass__task"))
    {
        mass__task = JSON.parse(localStorage.getItem('mass__task'));
        show();
    }
}
document.getElementById("clear__local").addEventListener("click", function(e){

    localStorage.clear();
    e.preventDefault();    
})