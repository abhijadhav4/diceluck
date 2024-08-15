// Generate a random number between 1 and 6 for Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Create the file name for Player 1's dice image
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

// Since the images are in the same folder, no need to include a folder path
var randomImageSource1 = randomDiceImage1;

// Select the first image element and set the new source
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

// Generate a random number between 1 and 6 for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Create the file name for Player 2's dice image
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png

// Since the images are in the same folder, no need to include a folder path
var randomImageSource2 = randomDiceImage2;

// Select the second image element and set the new source
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Determine the winner and update the heading
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
