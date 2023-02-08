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

    // This is the flipCoin function in JS
    function drawHeads() {
        console.log("headimage");
    }

    //

    function drawTails() {
        console.log("tailimage");
    }

    function printMessage() {
        //print winning message 
    }

   


