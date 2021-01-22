if (sessionStorage.getItem("reload") !== null) {
    var imagesArray = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png", ];

    // get random images
    var randomImage1 = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    var randomImage2 = imagesArray[Math.floor(Math.random() * imagesArray.length)];

    // add the random images to the scr attrs
    var element1 = document.querySelector(".img1");
    var element2 = document.querySelector(".img2");

    setElementSrcAttribute(element1, randomImage1);
    setElementSrcAttribute(element2, randomImage2);

    var randomImage1Value = calculateDiceValue(imagesArray, randomImage1);
    var randomImage2Value = calculateDiceValue(imagesArray, randomImage2);


    // calculate winner and display to screen.
    var resultString = compareDice(randomImage1Value, randomImage2Value);
    document.querySelector("h1").textContent = resultString;
}

if (sessionStorage.getItem("reload") === null) {
    var imgArr = document.querySelectorAll("img");
    for (var i = 0; i < imgArr.length; i++) {
        imgArr[i].setAttribute("src", "images/dice1.png");
    }
    sessionStorage.setItem("reload", "true");
}



// functions
function setElementSrcAttribute(element, randomImage) {
    element.setAttribute("src", "images/" + randomImage);
}


function calculateDiceValue(arr, arrValue) {
    return arr.indexOf(arrValue) + 1;
}


function compareDice(randomImage1Value, randomImage2Value) {
    var resultString;
    if (randomImage1Value == randomImage2Value) {
        resultString = "Draw";
    } else if (randomImage1Value > randomImage2Value) {
        resultString = "Player 1 wins";
    } else {
        resultString = "Player 2 wins";
    };
    return resultString;
}