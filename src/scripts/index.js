var albums = {
  aToB: {
    name: "[A→B] Life",
    tracks: [
      "Bullet to Binary",
      "The Ghost",
      "Nice and Blue",
      "Everything Was Beautiful and Nothing Hurt",
      "(A)",
      "Gentlemen",
      "Be Still, Child",
      "We Know Who Our Enemies Are",
      "I Never Said That I Was Brave",
      "(B)",
      "Silencer",
      "The Cure for Pain"
    ]
  },
  catchUsTheFoxes: {
    name: "Catch for Us the Foxes",
    tracks: [
      "Torches Together",
      "January 1979",
      "Tie Me Up! Untie Me!",
      "Leaf",
      "Disaster Tourism",
      "Seven Sisters",
      "The Soviet",
      "Paper Hanger",
      "My Exit, Unfair",
      "Four Word Letter (Pt. Two)",
      "Carousels",
      "Son of a Widow"
    ]
  },
  brotherSister: {
    name: "Brother, Sister",
    tracks: [
      "Messes of Men",
      "The Dryness and the Rain",
      "Wolf Am I! (and Shadow)",
      "Yellow Spider",
      "A Glass Can Only Spill What It Contains",
      "Nice and Blue (Pt. Two)",
      "The Sun and the Moon",
      "Orange Spider",
      "C-Minor",
      "In a Market Dimly Lit",
      "O, Porcupine",
      "Brownish Spider",
      "In a Sweater Poorly Knit",
      "January 1979"
    ]
  },
  itsAllCrazy: {
    name: "It's All Crazy! It's All False! It's All a Dream! It's Alright",
    tracks: [
      "Every Thought a Thought of You",
      "The Fox, the Crow and the Cookie",
      "The Angel of Death Came to David's Room",
      "Goodbye, I!",
      "A Stick, a Carrot & String",
      "Bullet to Binary (Pt. Two)",
      "Timothy Hay",
      "Fig with a Bellyache",
      "Cattail Down",
      "The King Beetle on a Coconut Estate",
      "Allah, Allah, Allah"
    ]
  },
  tenStories: {
    name: "Ten Stories",
    tracks: [
      "February, 1878",
      "Grist for the Malady Mill",
      "East Enders Wives",
      "Cardiff Giant",
      "Elephant in the Dock",
      "Aubergine",
      "Fox's Dream of the Log Flume",
      "Nine Stories",
      "Fiji Mermaid",
      "Bear's Vision of St. Agnes",
      "All Circles"
    ]
  },
  paleHorses: {
    name: "Pale Horses",
    tracks: [
      "Pale Horse",
      "Watermelon Ascot",
      "D-Minor",
      "Mexican War Streets",
      "Red Cow",
      "Dorothy",
      "Blue Hen",
      "Lilac Queen",
      "Magic Lantern Days",
      "Birnam Wood",
      "Rainbow Signs"
    ]
  },
  untitled: {
    name: "[Untitled]",
    tracks: [
      "9:27a.m., 7/29",
      "Julia (or, 'Holy to the LORD' on the Bells of Horses)",
      "Another Head for Hydra",
      "[dormouse sighs]",
      "Winter Solstice",
      "Flee, Thou Matadors!",
      "Tortoises All the Way Down",
      "2,459 Miles",
      "Wendy & Betsy",
      "New Wine, New Skins",
      "Michael, Row Your Boat Ashore",
      "Break on Through (to the Other Side) [pt. Two]"
    ]
  }
};

function selectAlbum(id) {
  let container = document.getElementById("album-description");

  container.innerHTML = "<h2>" + albums[id].name + "</h2>";
  container.innerHTML += "<ul>"
  for(let i = 0; i < albums[id].tracks.length; i++){
    container.innerHTML += "<li>";
    container.innerHTML += albums[id].tracks[i];
    container.innerHTML += "</li>";
  }
  container.innerHTML += "</ul>"
}

Array.from(document.getElementsByClassName("block")).forEach(function(element) {
  element.addEventListener("click", function() {
    selectAlbum(element.id);
  });
});
