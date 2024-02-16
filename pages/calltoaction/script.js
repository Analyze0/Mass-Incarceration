let menuBtn = document.getElementById("menuBtn");
let sidebar = document.getElementById("sidebar");
let btnToggle = "1";

let home = document.getElementById("home");
let timeline = document.getElementById("timeline");
let data = document.getElementById("data");
let calltoaction = document.getElementById("calltoaction");
let link = document.querySelector("h1 small");

menuBtn.onmousedown = function(e) {
  if (btnToggle == "1") {
    menuBtn.style.animation = "rotate .4s ease-in-out";
    menuBtn.style.transform = "rotate(90deg)";
    sidebar.style.animation = "expand .4s ease-in-out";
    sidebar.style.width = "600px";
    btnToggle = "0";

    let links = document.querySelectorAll(".links h1 small");
    links.forEach(link => {
      link.style.animation = "fadein .4s ease-in-out";
      link.style.opacity = "1";
    });

  }
  else if (btnToggle == "0") {
    menuBtn.style.animation = "rotateBack .4s ease-in-out";
    menuBtn.style.transform = "rotate(0deg)";
    sidebar.style.animation = "shrink .4s ease-in-out";
    sidebar.style.width = "100px";
    btnToggle = "1";

    let links = document.querySelectorAll(".links h1 small");
    links.forEach(link => {
      link.style.animation = "fade .4s ease-in-out";
      link.style.opacity = "0";
    });

  }
  console.log(btnToggle);
}

function show () {
  document.getElementById("spinner").classList.add("show");
}
function hide () {
  document.getElementById("spinner").classList.remove("show");
  document.getElementById("spinner").style.opacity = "0";
  document.getElementById("spinner").style.visibility = "none";
}

show();

setTimeout(hide, 2000);

document.getElementById('home').onmousedown = function(e){
  window.location.href = "/index.html";
}
document.getElementById('timeline').onmousedown = function(e){
  window.location.href = "/pages/timeline/index.html"
}
document.getElementById('data').onmousedown = function(e){
  window.location.href = "/pages/data/index.html"
}
document.getElementById('calltoaction').onmousedown = function(e){
  window.location.href = "/pages/calltoaction/index.html"
}
document.getElementById('campaign').onmousedown = function(e){
  window.location.href = "/pages/campaign/index.html"
}
document.getElementById('annotatedbibliography').onmousedown = function(e){
  window.location.href = "/pages/bibliography/index.html";
}