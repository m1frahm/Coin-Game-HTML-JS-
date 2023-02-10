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
            winHeads();
        } else {
            drawTails();
            winTails();
        }
    }

    var clickButton = document.getElementById("Click");
    var headImage = document.getElementById("Himage")
    var tailImage = document.getElementById("Timage")

    // if the person clicks on image (result 0) and heads come then show heads image and hide tails image
    function drawHeads() {
        tailImage.style.display = "none" // none hides
        headImage.style.display = "block" // block visible
    }
  
    // if the person clicks on image (result 0) and tails come then show tails image and hide heads image
    function drawTails() {
        headImage.style.display = "none"
        tailImage.style.display = "block"
    }

    var headMsg = document.getElementById("WinMessageHeads"); // refers to win message in h4 tag for heads
    var tailMsg = document.getElementById("WinMessageTails"); // refers to win message in h4 tag for tails

    // if person gets a head image than print heads msg
    function winHeads() {
        headMsg.style.display = "block"
        tailMsg.style.display = "none"
    }

    // if person gets a tail image than print tail msg
    function winTails() {
        tailMsg.style.display = "block"
        headMsg.style.display = "none"
    }
   
   


