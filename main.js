function Togglemenu() {
  const menuToggle = document.querySelector(".menuToggle");
  menuToggle.classList.toggle("active");
  const navigation = document.querySelector('.navigation');
  navigation.classList.toggle("active");
}
function ImgSlider(parameters) {
  document.getElementById("slider").src = parameters;
}
