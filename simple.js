document.querySelector(".btn").addEventListener("click", function () {
    var colors = ["red", "orange", "yellow", "blue", "green", "purple", "pink", "black", "white"]
    var current_color = colors[Math.floor(Math.random()*colors.length)]
    document.querySelector(".current-color").innerHTML = current_color;
    document.body.style.backgroundColor = current_color;
  });