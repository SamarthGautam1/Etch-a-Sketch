const container=document.querySelector(".container");
let i=0;
for(i;i<256;i++){
    let newdiv=document.createElement("div");
    newdiv.classList.add("grid-square");
    newdiv.addEventListener("mouseenter",()=>{
        newdiv.style.backgroundColor="black";
    })
    container.appendChild(newdiv);
}

btn.addEventListener("click", () => {
    let size = prompt("Enter the size of the grid (max 100):");
    size = parseInt(size);

    if (isNaN(size) || size < 1 || size > 100) {
        alert("Invalid input. Please enter a number between 1 and 100.");
        return;
    }

    container.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
        let userdiv = document.createElement("div");
        userdiv.classList.add("usergrid");
        userdiv.style.width = `calc(100% / ${size})`;
        userdiv.style.height = `calc(100% / ${size})`;
        userdiv.addEventListener("mouseenter", () => {
            userdiv.style.backgroundColor = "black";
        });
        container.appendChild(userdiv);
    }
});