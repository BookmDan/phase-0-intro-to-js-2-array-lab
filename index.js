// Write your solution here!
let cats = new Array("Milo", "Otis", "Garfield");

function destructivelyAppendCat(name) {
  const newcats = [...cats];
  newcats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name)
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function appendCat(name) {
  cats = [...cats]
  cats.push(name);
}

function prependCat(name) {
  catsnew = [...cats]
  catsnew.unshift(name);
}

function removeLastCat() {
  catsnew = [...cats]
  catsnew.pop();
}