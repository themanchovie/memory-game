/*
 * Create a list that holds all of your cards
 */
 const array = [{
     // 'name': 'diamond',
     'img': 'fa fa-diamond',
   },
   {
     // 'name': 'plane',
     'img': 'fa fa-paper-plane-o',
   },
   {
     // 'name': 'anchor',
     'img': 'fa fa-anchor',
   },
   {
     // 'name': 'bolt',
     'img': 'fa fa-bolt',
   },
   {
     // 'name': 'cube',
     'img': 'fa fa-cube',
   },
   {
     // 'name': 'leaf',
     'img': 'fa fa-leaf',
   },
   {
     // 'name': 'bicycle',
     'img': 'fa fa-bicycle',
   },
   {
     // 'name': 'bomb',
     'img': 'fa fa-bomb',
   },
 ];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



// Grab the div with an id of container
const container = document.getElementById("container");

// Create a section with a class of deck
const shuffledDeck = document.createElement("ul");
shuffledDeck.setAttribute("class", "deck");

// Append the deck section to the container div
container.appendChild(shuffledDeck);




// For each item in the array...
array.forEach(item => {
  // Create a li
  const makeCard = document.createElement('li');
  makeCard.setAttribute("class", "card open show");
  // // Apply a card class to that div
  // card.classList.add('card');
  makeCard.innerHTML = <i class="${item.img}"></i>
// STILL NEED TO ADD IMAGE ELEMENT (<i class = "fa fa-.name"><i>)
  // // Set the data-name attribute of the div to the array name
  // card.dataset.name = item.name;
  //
  // // Apply the background image of the div to the cardsArray image
  // card.class = `url(${item.img})`;

  // Append the div to the grid section
  shuffledDeck.appendChild(makeCard);
});



// // Duplicate array to create a match for each card
// let gameGrid = shuffledDeck.concat(shuffledDeck);
//
// // For each item in the gameGrid array...
// gameGrid.forEach(item => {
//   // ...

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
