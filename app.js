// right Bar of Menu
const closeBar = document.querySelector(".fa-xmark");
const openBar = document.querySelector("#open-bar");
const rightBar = document.querySelector(".aside");
const pageOverlay = document.querySelector(".overlay-page");

if (openBar) {
  openBar.addEventListener("click", () => {
    rightBar.classList.add("open");
    pageOverlay.style.display = "block";
    leftmenu.classList.remove("open-left");
    openleft.classList.remove("topbar");
  });
}
if (closeBar) {
  closeBar.addEventListener("click", () => {
    rightBar.classList.remove("open");
    pageOverlay.style.display = "none";
  });
}
// left menu bar
const leftmenu = document.querySelector(".left-bar");
const closeleft = document.querySelector("#close-left");
const openleft = document.querySelector("#server");
const pageOverlays = document.querySelector(".overlay-page");
openleft.addEventListener("click", () => {
  leftmenu.classList.toggle("open-left");
  openleft.classList.toggle("topbar");
});
// if (openleft) {
//   openleft.addEventListener("click", () => {
//     leftmenu.classList.add("open-left");
//     // pageOverlays.style.display = "block";
//   });
// }
// if (closeleft) {
//   closeleft.addEventListener("click", () => {
//     leftmenu.classList.remove("open-left");
//     // pageOverlays.style.display = "none";
//   });
// }
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
function togglePasswordVisibilityOne() {
  var passwordInput = document.getElementById("password-1");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
function togglePasswordVisibilityTwo() {
  var passwordInput = document.getElementById("password-2");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
function togglePasswordVisibilityThree() {
  var passwordInput = document.getElementById("password-3");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
function togglePasswordVisibilityFour() {
  var passwordInput = document.getElementById("password-4");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
// Link Navigation
const activePage = window.location.pathname;
const navLink = document.querySelectorAll(".eng-kh a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("actives");
  } else {
    link.classList.remove("actives");
  }
});
const activePages = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-aside a").forEach((link) => {
  if (link.href.includes(`${activePages}`)) {
    link.classList.add("actives-1");
  } else {
    link.classList.remove("actives-1");
  }
});
const activePagese = window.location.pathname;
const navLinkse = document.querySelectorAll(".userCart > a").forEach((link) => {
  if (link.href.includes(`${activePages}`)) {
    link.classList.add("actives-2");
  } else {
    link.classList.remove("actives-2");
  }
});
// Preview Cart
let popUp = document.getElementById("preview");
function openPopup() {
  preview.classList.toggle("open-cart");
  userCart.classList.remove("show-User");
}
// function closePopup() {
//   preview.classList.remove("open-cart");
// }
// UserCart
let userUp = document.getElementById("userCart");
function openUser() {
  userCart.classList.toggle("show-User");
  preview.classList.remove("open-cart");
}
// function closeUser() {
//   userCart.classList.remove("show-User");
// }

function toggle_full_screen() {
  if (
    (document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)
  ) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      /* Firefox */
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      /* Chrome, Safari & Opera */
      document.documentElement.webkitRequestFullScreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
    } else if (document.msRequestFullscreen) {
      /* IE/Edge */
      document.documentElement.msRequestFullscreen();
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      /* Chrome, Safari and Opera */
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }
  }
}
function clearField() {
  var selectField = document.getElementById("server");
  selectField.value = "server";
}

window.onscroll = () => {
  preview.classList.remove("open-cart");
  userCart.classList.remove("show-User");
};
// list languages
const optionMenu = document.createElement(".aside");
const clickBtn = document.querySelector(".fa-angle-down");
clickBtn.addEventListener("click", () => optionMenu.classList.toggle("now"));
