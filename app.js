// right Bar of Menu
const closeBar = document.querySelector(".fa-xmark");
const openBar = document.querySelector("#open-bar");
const rightBar = document.querySelector(".aside");
const pageOverlay = document.querySelector(".overlay-page");

if (openBar) {
  openBar.addEventListener("click", () => {
    rightBar.classList.add("open");
    pageOverlay.style.display = "block";
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
if (openleft) {
  openleft.addEventListener("click", () => {
    leftmenu.classList.add("open-left");
    pageOverlays.style.display = "block";
  });
}
if (closeleft) {
  closeleft.addEventListener("click", () => {
    leftmenu.classList.remove("open-left");
    pageOverlays.style.display = "none";
  });
}

let eyeIcon = document.getElementById("hidden");
let password = document.getElementById("password");

eyeIcon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};

let eyeIconOne = document.getElementById("hidden-1");
let passwordOne = document.getElementById("password-1");
eyeIconOne.onclick = function () {
  if (passwordOne.type == "password-1") {
    passwordOne.type = "text";
  } else {
    passwordOne.type = "password-1";
  }
};

let eyeIcontwo = document.getElementById("hidden-2");
let passwordtwo = document.getElementById("password-2");
eyeIcontwo.onclick = function () {
  if (passwordtwo.type == "password-2") {
    passwordtwo.type = "text-2";
  } else {
    passwordtwo.type = "password-2";
  }
};
// Link Navigation
const activePage = window.location.pathname;
const navLink = document.querySelectorAll("ul li a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// Preview Cart
let popUp = document.getElementById("preview");
function openPopup() {
  preview.classList.add("open-cart");
  userCart.classList.remove("show-User");
}
function closePopup() {
  preview.classList.remove("open-cart");
}
// UserCart
let userUp = document.getElementById("userCart");
function openUser() {
  userCart.classList.add("show-User");
  preview.classList.remove("open-cart");
}
function closeUser() {
  userCart.classList.remove("show-User");
}

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
