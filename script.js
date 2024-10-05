let btn = document.querySelector("button");


btn.addEventListener("click", ()=>{
    let p = document.querySelector("p");
    p.innerText = randomcolor();
    
    let body = document.querySelector("body");
    body.style.backgroundColor = randomcolor();
    
})


function randomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    
    let color = `rgb(${red}, ${green}, ${blue})`
    return color;
}