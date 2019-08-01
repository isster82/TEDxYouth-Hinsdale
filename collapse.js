var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    //this.classList.toggle("active");
    var collapsed = this.nextElementSibling;
    if (collapsed.style.maxHeight){
      collapsed.style.maxHeight = null;
    } else {
      collapsed.style.maxHeight = collapsed.scrollHeight + "px";
    }
  });
}