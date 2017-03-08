(function() {
// ********
window.jobApp = window.jobApp || {};

  document.querySelector("#full-name").addEventListener("blur", function checkLength(e) {
      console.log("BLUR TEST");
      if (value.length = 0) {
        e.classList.add("has-error");
        console.log("HAS ERROR");
      } else {
        console.log("NO ERROR");
      }
});







// ********
  // ;
}());
