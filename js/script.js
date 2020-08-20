function mobileNavMenuJs() {
  let x = document.getElementById("mobile-nav-menu-js");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let myButton = document.querySelector(".myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let removeID = document.querySelectorAll(".removeID");

removeID.forEach((element) => {
  element.onclick = function () {
    const removeFunction = document.querySelector(".removeID");
    if (this.classList.contains("borderRadiusStart")) {
      this.classList.remove("borderRadiusStart");
    } else {
      this.classList.add("borderRadiusStart");
    }
  };
});
