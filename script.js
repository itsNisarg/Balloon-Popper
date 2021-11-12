var balloon1 = document.getElementById("balloon1");

var balloon2 = document.getElementById("balloon2");

var balloon3 = document.getElementById("balloon3");

var balloon4 = document.getElementById("balloon4");

var balloon5 = document.getElementById("balloon5");

var balloon6 = document.getElementById("balloon6");

var balloon7 = document.getElementById("balloon7");

var balloon8 = document.getElementById("balloon8");

var balloon9 = document.getElementById("balloon9");

var balloon10 = document.getElementById("balloon10");

var no_balloon = document.getElementById("no-balloon");

function balloonPopper(balloonVar) {
  balloonVar.addEventListener("mouseover", popBalloon);

  function popBalloon() {
    if (balloonVar.style.background === "none") {
      balloonVar.i = "!";
    } else {
      balloonVar.innerText = "";
      balloonVar.style.background = "none";
    }
  }

  balloonVar.addEventListener("mouseout", popIsOver, false);

  function popIsOver() {
    balloonVar.innerText = "";
  }
}

balloonPopper(balloon1);
balloonPopper(balloon2);
balloonPopper(balloon3);
balloonPopper(balloon4);
balloonPopper(balloon5);
balloonPopper(balloon6);
balloonPopper(balloon7);
balloonPopper(balloon8);
balloonPopper(balloon9);
balloonPopper(balloon10);

document.addEventListener("mouseover", noBalloon, false);

function noBalloon() {
  if (
    balloon1.style.background === "none" &&
    balloon2.style.background === "none" &&
    balloon3.style.background === "none" &&
    balloon4.style.background === "none" &&
    balloon5.style.background === "none" &&
    balloon6.style.background === "none" &&
    balloon7.style.background === "none" &&
    balloon8.style.background === "none" &&
    balloon9.style.background === "none" &&
    balloon10.style.background === "none"
  ) {
    no_balloon.style.display = "block";
    heading1.style.display = "none";
    window.scrollTo(0, 0);
  }
}
