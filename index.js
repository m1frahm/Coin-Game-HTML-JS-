//Psuedocode
// 


// This is the flipCoin function in JS
function flipCoin () {
        // assign random value where 0 = heads & 1 = tails
        var flip = Math.floor(Math.random() * 2)
        console.log(flip);
        if (flip === 0)
        {
            drawHeads() || document.getElementById("WinMessageHeads").innerHTML;
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

    // function printMessage() {
    //     if drawHeads() {
    //         document.getElementById("WinMessageHeads").innerHTML;
    //     } else {
    //         document.getElementById("WinMessageTails").innerHTML;
    //     }
    // }

   


