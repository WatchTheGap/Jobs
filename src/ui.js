(function() {
// ********
window.jobApp = window.jobApp || {};

  document.querySelector("#full-name").addEventListener("blur", function checkLength(e) {
      console.log("BLUR TEST");
      console.log(document.querySelector("#full-name").value);
      if (document.querySelector("#full-name").value.length === 0) {
        document.querySelector("#full-name").parentNode.classList.add("has-error");
        console.log("ERROR");
      } else {
        console.log("NO ERROR");
      }
});

document.querySelector("#exp").addEventListener("change", function updateXp(e) {
  console.log("CHANGE TEST");
  document.querySelector("figure").innerText = document.querySelector("#exp").value + " years";

});





// ********
  // ;
}());
