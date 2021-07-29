document.querySelector(".btn").addEventListener("click", function () {
  var current_color = randomHexGen()
  document.querySelector(".current-color").innerHTML = current_color;
  document.body.style.backgroundColor = current_color;
});

function randomHexGen() {
  var hex_codes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  var hex_length = hex_codes.length;
  var current_color = "#";
  for (var i = 0; i < 6; i++) {
    var randomElem = hex_codes[Math.floor(Math.random() * hex_length)];
    current_color = current_color.concat(randomElem);
  }
  return current_color
}
