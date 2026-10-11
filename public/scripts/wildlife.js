/* Original wildlife animation from unr-grad-community. */
(() => {
  document.documentElement.classList.add("wildlife-ready");
  var WILDLIFE_CONFIG = {
    sageGrouse: {
      emergeDelay: 1200
    },
    pronghorn: {
      firstRunDelay: 6000,
      speedPxPerSec: 130,
      grazePauseMin: 2000,
      grazePauseMax: 4000,
      cooldownMin: 45000,
      cooldownMax: 90000
    }
  };

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initSageGrouse() {
    var scene = document.querySelector(".sage-grouse-scene");
    if (!scene) return;

    var cfg = WILDLIFE_CONFIG.sageGrouse;

    setTimeout(function () {
      scene.classList.add("is-visible");
    }, cfg.emergeDelay);
  }

  function initPronghorn() {
    // Reduced motion: CSS already hides the element; skip scheduling any
    // of the timers/transitions below entirely.
    if (reducedMotion) return;

    var pos = document.querySelector(".pronghorn-runner__pos");
    if (!pos) return;

    var cfg = WILDLIFE_CONFIG.pronghorn;

    function randomBetween(min, max) {
      return min + Math.random() * (max - min);
    }

    function moveTo(x, callback) {
      var current = pos.getBoundingClientRect().left;
      var distance = Math.abs(x - current);
      var duration = Math.max(distance / cfg.speedPxPerSec, 0.3);
      pos.style.transitionDuration = duration + "s";

      var done = false;
      function onEnd() {
        if (done) return;
        done = true;
        pos.removeEventListener("transitionend", onEnd);
        callback();
      }
      pos.addEventListener("transitionend", onEnd, { once: true });
      requestAnimationFrame(function () {
        pos.style.transform = "translateX(" + x + "px)";
      });
    }

    function graze(callback) {
      pos.classList.add("is-grazing");
      setTimeout(function () {
        pos.classList.remove("is-grazing");
        callback();
      }, randomBetween(cfg.grazePauseMin, cfg.grazePauseMax));
    }

    function runOnce() {
      var viewportWidth = window.innerWidth;
      var waypoint1 = viewportWidth * randomBetween(0.3, 0.42);
      var waypoint2 = viewportWidth * randomBetween(0.6, 0.75);
      var exitPoint = viewportWidth + 80;

      // Reset instantly to the off-screen start before each run.
      pos.style.transitionDuration = "0s";
      pos.style.transform = "translateX(-80px)";

      requestAnimationFrame(function () {
        moveTo(waypoint1, function () {
          graze(function () {
            moveTo(waypoint2, function () {
              graze(function () {
                moveTo(exitPoint, function () {
                  var cooldown = randomBetween(cfg.cooldownMin, cfg.cooldownMax);
                  setTimeout(runOnce, cooldown);
                });
              });
            });
          });
        });
      });
    }

    setTimeout(runOnce, cfg.firstRunDelay);
  }

  initSageGrouse();
  initPronghorn();

})();
