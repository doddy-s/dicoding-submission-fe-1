window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    document.getElementById("logo").style.height = "8vh";
  } else {
    document.getElementById("logo").style.height = "16vh";
  }
}
