//Guess My Number

//gameActive für einmalige ausführung von check
let gameActive = false
let score = document.querySelector("#Score");
let highScore = document.querySelector("#HighScore");
score.value = 0
highScore.value = 0;


//Umwandlung String->Int
let scoreNumberString = score.value
let scoreNumberInt = parseInt(scoreNumberString)

let highScoreNumberString = highScore.value
let highScoreNumberInt = parseInt(highScoreNumberString)


//Generate klick function
document.getElementById("GenerateButton").addEventListener("click", function () {
    gameActive = true;
    ZufallsZahl = Math.floor(Math.random() * 2) + 1;


    let check = document.getElementById("GuessNumber").textContent = "?"

    //Entfernt die Vorhebung
    document.querySelector("#magicBox").classList.remove('win--background--active')
    document.querySelector("#magicBox").classList.remove('loose--background--active')

})


//Check klick function
document.getElementById("CheckButton").addEventListener("click", function () {

    let valueOfCheckBox = document.getElementById("CheckBox").value;

    //Überprüft ob die Eingabe eine Zahl ist:
    if ((valueOfCheckBox == "1" || valueOfCheckBox == "2") && gameActive) {

        //Wenn man Buchstabe eingibt wird garnicht angezeigt
        let check = document.getElementById("GuessNumber").textContent = ZufallsZahl
        //valueOfCheckBox -> string -> Eingabe begrenzt
        let valueOfCheckBoxInt = parseInt(valueOfCheckBox)
        // Überprüft die eingegebene Nummer mit der generierte 
        if (check == valueOfCheckBoxInt) {
            document.querySelector("#magicBox").classList.add('win--background--active')
            scoreNumberInt += 1;
            score.value = scoreNumberInt
            gameActive = false;


        } else {
            document.querySelector("#magicBox").classList.add('loose--background--active')
            highScore.value > score.value ? highScore.value : highScore.value = score.value
            scoreNumberInt = 0
            score.value = scoreNumberInt
        }

    } else {
        alert("Bitte nur 1 oder 2 eingeben oder erstmal auf Generate klicken")
    }

})

