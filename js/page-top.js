window.addEventListener("scroll", function () {
  const topBtn = document.getElementById("topbtn");
  const scroll = window.pageYOffset;
  if (scroll > 1000) {      // ➃
    topBtn.style.opacity = 0.5;
  } else topBtn.style.opacity = 0; 
});