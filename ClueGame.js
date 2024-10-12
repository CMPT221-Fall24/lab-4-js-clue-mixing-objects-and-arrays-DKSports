let suspectsArray=["Miss Scarlet","Professor Plum","Mrs. Peacock","Colonel Mustard","Mr. Green","Mrs. White"];
let weaponsArray=["knife","candlestick","revolver","rope","pipe","wrench","axe","poison"];
let roomsArray=["Kitchen","Ballroom","Conservatory","Billiard Room","Library","Study","Hall","Lounge","Dining Room","Cellar"];

function selectRandom(arr){return arr[Math.floor(Math.random()*arr.length)]}

function pickMystery(){
return{
suspect:selectRandom(suspectsArray),
weapon:selectRandom(weaponsArray),
room:selectRandom(roomsArray)
}
}

function revealMystery(mystery){
return mystery.suspect+" killed Mr. Marist using the "+mystery.weapon+" in the "+mystery.room+"!"
}

function startGame(){
let mystery=pickMystery();
document.getElementById("reveal").innerText=revealMystery(mystery);
}