let sound = document.querySelector(".pet"); 

const pet = document.querySelectorAll(".pet");


for(let i = 0; i<pet.length; i++)
{
    pet[i].addEventListener("click", function(){
        let name = this.innerHTML; 
        let low = name.toLowerCase(); 
        makesound(low); 
        addStyle(low);
    })
}


function makesound(nam)
{
    switch(nam)
    {
        case "cow" :
            let x = new Audio("cow.mp3");
            x.play();
            break;
        case "horse":
            let y = new Audio("horse.mp3");
            y.play(); 
            break; 
        case "dinosaur":
            let z = new Audio("dino.mp3");
            z.play();
            break;
    }
}


function addStyle(nam)
{
    let active  = document.querySelector("."+nam)
    active.classList.add("active"); 
    setTimeout(() => {
        active.classList.remove("active");
    }, 4000);
}