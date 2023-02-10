//Psuedocode
// 


// This is the flipCoin function in JS
function flipCoin () {
        // assign random value where 0 = heads & 1 = tails
        var flip = Math.floor(Math.random() * 2)
        console.log(flip);
        if (flip === 0)
        {
            drawHeads() && winHeads();
        } else {
            drawTails();
        }
    }

    var clickButton = document.getElementById("Click");
    var headImage = document.getElementById("Himage")
    var tailImage = document.getElementById("Timage")

    // if the person clicks on image (result 0) and heads come then show heads image and hide tails image
    function drawHeads(imageOfHeads) {
        tailImage.style.display = "none"
        headImage.style.display = "block"
    }
  
    // if the person clicks on image (result 0) and tails come then show tails image and hide heads image
    function drawTails(imageofTails) {
        headImage.style.display = "none"
        tailImage.style.display = "block"
    }

    var headMsg = document.getElementsById("WinMessageHeads"); // refers to win message in h4 tag for heads
    var tailMsg = document.getElementById("WinMessageTails"); // refers to win message in h4 tag for tails

    // if person gets a head image than print heads msg
    function winHeads(headWinning) {
        headMsg.style.display = "block"
        tailMsg.style.display = "none"
    }
   


