const dino = document.querySelector(".dino");

function handleKeyUp(event){    
    if(event.key === " ") {
        console.log("Pressionou espaço")
    }
}



document.addEventListener('keyup', handleKeyUp);