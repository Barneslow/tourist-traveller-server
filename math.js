function randomFromArray(array) {
  const item = array[Math.floor(Math.random() * array.length)];

  return item;
}

function randomThreeFromArray(array) {
  let randomItems = [];

  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * array.length);
    randomItems.push(array.splice(randomIndex, 1)[0]);
  }

  return randomItems;
}

module.exports = { randomFromArray, randomThreeFromArray };
