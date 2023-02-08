//Psuedocode

//Do we need flip function with two parameters that is heads, tails


//Create a CoinGame class that has 2 properties
// this.
//this.Score and set the max 5

//Maybe create a method called Win

class CoinGame {
    constructor(coinName, Score) {
        this.coinName = ["Heads","Tails"]
        this.score = 0
    } 
    flipCoin () {
        // this will either show heads image or tail image using random?
    }
    showScore() {
        //you would probably update an HTML element that shows the score
        console.log(`Your current score is: ${this.score}`);
    }
    resetScore () {
        //reset score back to 0
    }
    addPoint() {
        // this would be called when the person clicks on the correct coin 
        this.score+=1;
      }
    }

//we need to pass values into our objects
let myGame = new CoinGame(["Heads"])