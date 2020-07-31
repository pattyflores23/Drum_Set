// DETECTING BUTTON PRESS
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    // addEventListener---sets up an event to be called whenever
    // the specified event is delivered to the target
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        // THIS = the identity of the button that triggers the "Listener"
        // this.style.color = "white"; changes the color to white when clicked
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    }); 
}

// DETECTING KEYBOARD PRESS
document.addEventListener("keydown", function(e) {

    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); 
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(key);
    
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout (function(){
        activeButton.classList.remove("pressed");
    }, 100);
    
    
}




// function HouseKeeper(Name, yearsOfExperience, skills, permit) {
//     this.Name = Name;
//     this.yearsOfExperience = yearsOfExperience;
//     this.skills = skills;
//     this.permit = permit;
//     this.cleanBathroom = function() {
//         alert("I'd like to clean your restroom. It is my specialty");
//         getCleaningSupplies();
//         clean();
//     }
// }

// var houseKeeper1 = new HouseKeeper("Rita", 20, "kitchen", "true");

// console.log(houseKeeper1.clean);



// function add(num1, num2) {
//     return num1 + num2;
//     }
    
//     function subtract(num1, num2) {
//     return num1 - num2;
//     }
    
//     function multiply(num1, num2) {
//     return num1 * num2;
//     }
    
//     function divide(num1, num2) {
//     return num1 / num2;
//     }
    
//     function calculator(num1, num2, operator) {
//     return operator(num1, num2);
//     }