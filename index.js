var myInput = document.getElementById("my-input");
function hideplaceholder() {
  myInput.onfocus = function () {
    "use strict";
    this.setAttribute("on-focus", this.getAttribute("placeholder"));
    this.setAttribute("placeholder", " ");
  };
  myInput.onblur = function () {
    "use strict";
    this.setAttribute("placeholder", this.getAttribute("on-focus"));
    this.setAttribute("on-focus", " ");
  };
}
hideplaceholder();
