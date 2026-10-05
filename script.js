(function () {
  var body = document.body;
  var screen = document.getElementById("envelope-screen");
  var letter = document.getElementById("letter");
  var title = document.getElementById("letter-title");
  var openBtn = document.getElementById("open-btn");
  var closeBtn = document.getElementById("close-btn");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var OPEN_MS = 1600;

  function showLetter() {
    screen.hidden = true;
    letter.hidden = false;
    window.scrollTo(0, 0);
    // Две рамки, за да тръгне плавното появяване след махането на hidden
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        body.classList.add("is-open");
        title.focus({ preventScroll: true });
      });
    });
  }

  openBtn.addEventListener("click", function () {
    if (body.classList.contains("is-opening")) return;
    body.classList.add("is-opening");
    if (reduceMotion) {
      showLetter();
    } else {
      setTimeout(showLetter, OPEN_MS);
    }
  });

  closeBtn.addEventListener("click", function () {
    body.classList.remove("is-opening", "is-open");
    letter.hidden = true;
    screen.hidden = false;
    window.scrollTo(0, 0);
    openBtn.focus();
  });
})();
