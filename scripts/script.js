import { users } from "./users.js";
import { checkUser } from "./validator.js";
import { getAllUserFunc } from "./getUsers.js"

getAllUserFunc()

let modale = document.getElementById("displayModal");
modale.style.display = "none";

let overlay = document.getElementById("overlayID");

function showModaleFunc() {
  modale.style.display = "block";
}

function displayOverlayFunc() {
  overlay.innerHTML = "<div class='active'></div>";
}

document.getElementById("showUserForm").onclick = () => {
  showModaleFunc();
  displayOverlayFunc();
};

let deleteModale = document.getElementById("displayDeleteModal");
deleteModale.style.display = "none";

window.onclick = function (event) {
  if (event.target.attributes["class"]) {
    if (event.target.attributes["class"].value == "active") {
      modale.style.display = "none";
      deleteModale.style.display = "none"
      overlay.innerHTML = "";
    }
  }
};

const userForm = document.getElementById("submitFormID")

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new FormData(e.target);

  document.querySelector("#errorsList").innerHTML = "";

  let firstName = form.get("fname");
  let lastName = form.get("lname");
  let state = form.get("status");
  let userName = form.get("name");
  let createdAt = form.get("createAt");
  let matricule = form.get("maticule");
  let userID = Date.now();

//   matricule = parseInt(matricule);
  createdAt = createdAt + ":00.000Z";

  const isValidUserInfo = checkUser(
    userID,
    firstName,
    lastName,
    state,
    userName,
    createdAt,
    matricule
  );

  if (isValidUserInfo.length != 0) {
    isValidUserInfo.map((error) => {
      document.querySelector("#errorsList").innerHTML += `
                      <li>${error}</li>
                  `;
    });
    return;
  }

  document.querySelector("#usersData").innerHTML = "";
  users.push({
    id: userID,
    createdDate: createdAt,
    status: state,
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    registrationNumber: matricule,
  });

  modale.style.display = "none";
  overlay.innerHTML = "";
  userForm.reset()

  getAllUserFunc();
});


let confirmDelete = document.getElementById("confirmDeleteUser")
let cancelDelete = document.getElementById("cancelDeleteUser")

confirmDelete.onclick = () => {
    document.querySelector("#usersData").innerHTML = "";

    let userID = sessionStorage.getItem('userID')

    users.map((element, index) => {
        if(element.id == userID) {
            users.splice(index, 1)
        }
    })

    getAllUserFunc();

    deleteModale.style.display = "none"
    overlay.innerHTML = "";
}

cancelDelete.onclick = () => {
    deleteModale.style.display = "none"
    overlay.innerHTML = "";
}
