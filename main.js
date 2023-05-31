document.addEventListener("DOMContentLoaded", function()
{
    let inserted = document.querySelector("#text");
    document.querySelector("#form1").addEventListener("submit", function(event)
    {
        let insert = document.querySelector("#insert");
        insert.innerHTML = ("i am "+inserted.value );
        event.preventDefault();

    })



})