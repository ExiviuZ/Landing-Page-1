const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.addEventListener("click", function () {
    img.classList.toggle("rotate");
    setTimeout(function () {
      img.classList.toggle("rotate");
    }, 750);
  });
});
