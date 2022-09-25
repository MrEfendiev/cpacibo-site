

 var modal = document.getElementById("my_modal");
 var btn = document.getElementById("btn_modal_window");

 btn.onclick = function () {
    modal.style.display = "block";
 }


 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}