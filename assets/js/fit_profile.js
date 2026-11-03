// size the profile pic so its bottom lines up with the bottom of the bio text
(function () {
  var profile = document.querySelector(".profile");
  // the .clearfix wrapper grows to contain the floated image, so measure the last paragraph instead
  var bio = document.querySelector("article > .clearfix > p:last-child");
  if (!profile || !bio) return;
  var img = profile.querySelector("img");

  function fits(w) {
    profile.style.width = w + "px";
    return img.getBoundingClientRect().bottom <= bio.getBoundingClientRect().bottom + 1;
  }

  function fit() {
    if (window.innerWidth < 576) {
      profile.style.width = "";
      return;
    }
    // shrinking the image widens the text and makes it shorter, so search for the biggest width that still fits
    var lo = 80, hi = Math.floor(bio.parentNode.parentNode.clientWidth * 0.4);
    // if the text is too long for even the biggest image, just use the biggest and let the bio column run on
    if (fits(hi)) return;
    if (!fits(lo)) return;
    while (hi - lo > 1) {
      var mid = Math.floor((lo + hi) / 2);
      if (fits(mid)) lo = mid; else hi = mid;
    }
    fits(lo);
  }

  var queued = false;
  window.addEventListener("resize", function () {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; fit(); });
  });
  if (img.complete) fit(); else img.addEventListener("load", fit);
  window.addEventListener("load", fit);
})();
