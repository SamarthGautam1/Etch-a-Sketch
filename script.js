const container=document.querySelector(".container");
let i=0;
for(i;i<256;i++){
    let newdiv=document.createElement("div");
    newdiv.classList.add("grid-square");
    container.appendChild(newdiv);
}