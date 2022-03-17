let deleteModale = document.getElementById("displayDeleteModal");
deleteModale.style.display = "none";

let overlay = document.getElementById("overlayID");

function showDeleteModaleFunc() {
    deleteModale.style.display = "block";
}
function displayOverlayFunc() {
  overlay.innerHTML = "<div class='active'></div>";
}

function DeleteModaleFunc(val) {
    showDeleteModaleFunc();
    displayOverlayFunc();
    sessionStorage.setItem('userID', val)
}

