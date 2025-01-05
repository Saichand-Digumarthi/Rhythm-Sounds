var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event) {
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key) {
    switch (key) {  
            case "a":
            var audio = new Audio("sounds/448534__tedagame__b6.wav");
            audio.play(); 
                break;
            case "b":
                var audio = new Audio("sounds/448537__tedagame__b5.wav");
                audio.play(); 
                break;
            case "c":
            var audio = new Audio("sounds/448540__tedagame__c1.wav");
            audio.play(); 
                break;
            case "d":
                var audio = new Audio("sounds/448543__tedagame__c8.wav");
                audio.play(); 
                break;
            case "e":
                var audio = new Audio("sounds/448546__tedagame__c3.wav");
                audio.play(); 
                break;
            case "f":
                var audio = new Audio("sounds/448549__tedagame__c4.wav");
                audio.play(); 
                break;
            case "g":
                var audio = new Audio("sounds/448552__tedagame__g4.wav");
                audio.play(); 
                break;
            case "h":
                var audio = new Audio("sounds/448555__tedagame__g7.wav");
                audio.play(); 
                break;
            case "i":
                var audio = new Audio("sounds/448558__tedagame__g2.wav");
                audio.play(); 
                break;
            case "j":
                var audio = new Audio("sounds/448561__tedagame__a4.wav");
                audio.play(); 
                break;
            case "k":
                var audio = new Audio("sounds/448564__tedagame__b1.wav");
                audio.play(); 
                break;        
            case "l":
                var audio = new Audio("sounds/448567__tedagame__a6.wav");
                audio.play(); 
                break;
            case "m":
                var audio = new Audio("sounds/448570__tedagame__a3.wav");
                audio.play(); 
                break;
            case "n":
                var audio = new Audio("sounds/448573__tedagame__a0.wav");
                audio.play(); 
                break;
            case "o":
                var audio = new Audio("sounds/448576__tedagame__a5.wav");
                audio.play(); 
                break;
            case "p":
                var audio = new Audio("sounds/448579__tedagame__a0.wav");
                audio.play(); 
                break;
            case "q":
                var audio = new Audio("sounds/448582__tedagame__f5.wav");
                audio.play(); 
                break;
            case "r":
                var audio = new Audio("sounds/448585__tedagame__f4.wav");
                audio.play(); 
                break;
            case "s":
                var audio = new Audio("sounds/448588__tedagame__f2.wav");
                audio.play(); 
                break;
            case "t":
                var audio = new Audio("sounds/448591__tedagame__g1.wav");
                audio.play(); 
                break;
            case "u":
                var audio = new Audio("sounds/448597__tedagame__f6.wav");
                audio.play(); 
                break;
            case "v":
                var audio = new Audio("sounds/448594__tedagame__f5.wav");
                audio.play(); 
                break;
            case "w":
                var audio = new Audio("sounds/448600__tedagame__d2.wav");
                audio.play(); 
                break;
            case "x":
                var audio = new Audio("sounds/448603__tedagame__d5.wav");
                audio.play(); 
                break;
            case "y":
                var audio = new Audio("sounds/448606__tedagame__d1.wav");
                audio.play(); 
                break;
            case "z":
                var audio = new Audio("sounds/448609__tedagame__d4.wav");
                audio.play(); 
                break;
     
        default: console.log(buttonInnerHTML);
          
     }   

}



function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
   setTimeout(function(){
    activeButton.classList.remove("pressed");

},102);

}






