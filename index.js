//Psuedocode
// 


// This is the flipCoin function in JS
function flipCoin () {
        // assign random value where 0 = heads & 1 = tails
        var flip = Math.floor(Math.random() * 2)
        console.log(flip);
        if (flip === 0)
        {
            drawHeads();
        } else {
            drawTails();
        }
    }

    var clickButton = document.getElementById("Click");
        
    var headImage = document.getElementById("Himage")
    var tailImage = document.getElementById("Timage")


    // This is the flipCoin function in JS
    function drawHeads(imageOfHeads) {
        tailImage.style.display = "none"
        headImage.style.display = "block"
    }

        
    // based on clicking of flipcoin, and it being 0 i want the heads image to come 

    function drawTails(imageofTails) {
        headImage.style.display = "none"
        tailImage.style.display = "block"
    }

    function printMessage() {
        document.getElementById("WinMessage").innerHTML = "The Winner is ____"
    }

   


