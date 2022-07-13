var grootArray = ["Groot1.jpg","Groot2.jpg","Groot3.jpg","Groot4.jpg","Groot5.jpg","Groot6.jpg"];
var myVar;

function startAnimation() {
  myVar = setInterval(function() {
    for (i=0; i<5; i++) {
      randomNum = Math.floor(Math.random()*5);
      name = "row" + (i+1);
      img = document.getElementsByClassName(name)
      img.src = grootArray[randomNum];
      // window.alert(name + ", " + grootArray[randomNum]);
    }
  }, 1000)
}

function stopAnimation() {
  clearInterval(myVar);
}

window.onload = startAnimation;