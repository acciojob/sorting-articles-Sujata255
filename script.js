const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway   
 State",
  "we are at Kona",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog"
];

const stopWords = ["a", "an", "the"];

const sortedBands = bands
  .filter(band => !stopWords.includes(band.toLowerCase()))
  .sort();

const bandList = document.getElementById("band");

sortedBands.forEach(band => {
  const listItem = document.createElement("li");
  listItem.textContent = band;
  bandList.appendChild(listItem);   

});