(function() {
// ********
window.jobApp = window.jobApp || {};

  document.querySelector("#full-name").addEventListener("blur", function checkLength(e) {
      console.log("BLUR TEST");
      console.log(document.querySelector("#full-name").value);
      if (document.querySelector("#full-name").value.length === 0) {
        console.log("ERROR");
      } else {
        console.log("NO ERROR");
      }
});







// ********
  // ;
}());
