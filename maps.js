
 var modalMaps = document.getElementById("maps__none");
 var btnMaps = document.getElementById("add__maps");

 btnMaps.onclick = function () {
    modalMaps.style.display = "block";
 }


 window.onclick = function (event) {
    if (event.target == modalMaps) {
        modalMaps.style.display = "none";
    }
}