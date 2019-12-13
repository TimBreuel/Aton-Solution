function mobileNavMenuJs() {
  let x = document.getElementById('mobile-nav-menu-js');
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let myButton = document.getElementById('myBtn');

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Ahmad fragen /////////////////////////////////////////////////
// Toggle möglich? //////////////////////////////////////////
// Warum funktioniert die nur bei einem /////////////////////
let removeID = document.querySelector('.removeID');

removeID.onclick = function () {
  const removeFunction = document.querySelector('.removeID');
  if (removeFunction.classList.contains('borderRadiusStart')) {
    removeFunction.classList.remove('borderRadiusStart');
  } else {
    removeFunction.classList.add('borderRadiusStart');
  };
}