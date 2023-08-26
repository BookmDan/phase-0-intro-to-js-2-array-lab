// Write your solution here!
let cats = new Array("Milo", "Otis", "Garfield");
let copycats 

console.log(cats);

function destructivelyAppendCat(name) {
  // const cats = [...cats];
  cats.push(name);
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
  

  // console.log(cats)
  const copycats = [...cats]
  copycats.push(name);
  // console.log(copycats);
  return copycats


}

appendCat("Broom")
// console.log(appendCat("Broom"));

function prependCat(name) {

  const copycats = [...cats]
  copycats.unshift(name);

  return copycats

}

prependCat("Arnold")

function removeLastCat() {
  

  const copycats = [...cats]
  copycats.pop();
  return copycats

  // copycats = [...cats]
}

function removeFirstCat() {

  // cats.shift(name);

  const copycats = [...cats]
  copycats.shift();
  return copycats;
  // copycats = [...cats]
}