// Create an Express route that accepts requests at a specific URL and responds with res.send.
// The express application should listen for requests on port 3000.

/*
1. Be Polite, Greet the User
Task: Create a route that responds to URLs like /greetings/<username-parameter>.

Examples: Matches routes like /greetings/Christy or /greetings/Mathilda.

Response: Include the username from the URL in the response, such as “Hello there, Christy!” or “What a delight it is to see you once more, Mathilda.”
*/

const express = require("express");
const app = express();

app.get("/greetings/:username", (req, res) => {
  let username = req.params.username;
  const greetings = `Hello there, ${username}!`;

  res.send(greetings);
});

let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
}); /*only needs to be used once and paste at the end*/

// --------------------------------------------------------------------------------------//

/*
2. Rolling the Dice
Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.

Examples: Matches routes like /roll/6 or /roll/20.

Validation: If the parameter is not a number, respond with “You must specify a number.” For instance, /roll/potato should trigger this response.

Functionality: If a valid number is provided, respond with a random whole number between 0 and the given number. For example, a request to /roll/16 might respond with “You rolled a 14.”
*/

const express = require("express");
const app = express();

app.get("/roll/:number", (req, res) => {
  let number = req.params.number;
  if (isNaN(number)) {
    res.send("You must specify a number.");
  } else {
    const rolledNumber = Math.random() * (parseInt(number) - 0) + 0;
    res.send(`You rolled a ${parseInt(rolledNumber)}.`);
  }
});

let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});

// --------------------------------------------------------------------------------------//

/*
3. I Want THAT One!
Task: Create a route for URLs like /collectibles/<index-parameter>.

Examples: Matches routes such as /collectibles/2 or /collectibles/0.

Data Array:
  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

Validation: If the index does not correspond to an item in the array, respond with “This item is not yet in stock. Check back soon!”

Response: Should describe the item at the given index, like “So, you want the shiny ball? For 5.95, it can be yours!” Include both the name and price properties.
*/

const express = require("express");
const app = express();

const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

app.get("/collectibles/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < collectibles.length) {
    const item = collectibles[index];
    res.send(
      `So, you want the ${item.name}? For ${item.price.toFixed(
        2
      )}, it can be yours!`
    );
  } else {
    res.send("This item is not yet in stock. Check back soon!");
  }
});

let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});

// --------------------------------------------------------------------------------------//

/*
4. Filter Shoes by Query Parameters
Use the following array of shoes in this challenge:

  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

Task: Create a route /shoes that filters the list of shoes based on query parameters.

Query Parameters:

min-price: Excludes shoes below this price.
max-price: Excludes shoes above this price.
type: Shows only shoes of the specified type.
No parameters: Responds with the full list of shoes.
*/

const express = require("express");
const app = express();

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];

app.get("/shoes", (req, res) => {
  let filteredShoes = shoes;
  const minPrice = req.query["min-price"];
  const maxPrice = req.query["max-price"];
  const type = req.query["type"];
  if (minPrice !== undefined) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.price >= minPrice);
  }
  if (maxPrice !== undefined) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.price <= maxPrice);
  }
  if (type !== undefined) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.type === type);
  }
  res.send(filteredShoes);
});

let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
