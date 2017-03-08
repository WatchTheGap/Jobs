(function() {
// ********
window.jobApp = window.jobApp || {};

  document.querySelector("#full-name").addEventListener("blur", function checkLength(e) {
      console.log("BLUR TEST");
      console.log(e.target);
      if (e.target.value.length === 0) {
        e.target.parentNode.parentNode.classList.add("has-error");
        console.log("ERROR");
      } else {
        e.target.parentNode.parentNode.classList.remove("has-error");
        console.log("NO ERROR");
      }
});

document.querySelector("#exp").addEventListener("change", function updateXp(e) {
  console.log("CHANGE TEST");
  e.target.innerText = e.target.value + " years";

});

let languageCount = 0;

Array.from(document.querySelectorAll("[name=languages]")).forEach(function checkStatus(each) {
  each.addEventListener("change", function countLang(e) {
    if (e.target.checked === true) {
      languageCount++;
      console.log(languageCount);
    } else {
      languageCount--;
      console.log(languageCount);
    }
  });
});

// ********
  // ;
}());
