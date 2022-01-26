const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil");
const allItems = document.getElementById("allItems");
const UserInput = document.getElementById("userInput");

pencil.addEventListener("click", function(){
    allItems.innerHTML = "";
})

UserInput.addEventListener("keydown", function(){
    if(event.key == "Enter")
        addItem();
})

function addItem(){
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " + UserInput.value;

    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through";
    })

    allItems.insertAdjacentElement("beforeend", h2)

    UserInput.value = "";
}