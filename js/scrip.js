// toggle navebar
let theNav = document.querySelector(".navv");
let resNav = document.querySelector(".res-nav");
let navIcon = document.querySelector(".res-nav .icon");
let theLinks = document.querySelector(".res-nav ul");
let footerLinks = document.querySelectorAll(".the-link");
let popupExit = document.querySelectorAll(".popup-div .exit");
let popupDiv = document.querySelectorAll(".popup-div");
let galleryPopup = document.querySelector(".gallery .gallery-popup");
let galleryPopupLeftBtn = document.querySelector(
  ".gallery .carousel-control-prev"
);
let galleryPopupRightBtn = document.querySelector(
  ".gallery .carousel-control-next"
);
let galleryPopupInner = document.querySelector(
  ".gallery .gallery-popup .carousel .carousel-inner"
);

galleryPopup.onclick = () => {
  galleryPopup.style.display = "none";
};

galleryPopupInner.addEventListener("click", (e) => {
  e.stopPropagation();
});

galleryPopupLeftBtn.addEventListener("click", (e) => {
  e.stopPropagation();
});

galleryPopupRightBtn.addEventListener("click", (e) => {
  e.stopPropagation();
});

navIcon.onclick = () => {
  theLinks.classList.toggle("nav-toggle");
};

window.onload = () => {
  document.querySelector(".banner .banner-nature").style.transform =
    "translateX(0%)";
};

window.onscroll = () => {
  //Animation
  document.querySelectorAll(".dad").forEach((parent) => {
    if (window.scrollY >= parent.offsetTop - 500) {
      parent.querySelectorAll(".transform").forEach((ele) => {
        ele.style.transform = "translate(0%, 0%)";
        ele.style.opacity = 1;
      });
    }
  });
  //Fixed Nav
  if (window.scrollY >= 60) {
    resNav.classList.add("fixed-nav");
    theNav.classList.add("fixed-nav");
  }
  if (window.scrollY < 60) {
    resNav.classList.remove("fixed-nav");
    theNav.classList.remove("fixed-nav");
  }
};

//Footer Popups
footerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.dataset.class) {
      document.querySelector(link.dataset.class).style.opacity = 1;
      document.querySelector(link.dataset.class).style.zIndex = 1000;
      theNav.style.zIndex = "1";
      resNav.style.zIndex = "1";
      if (document.querySelector(link.dataset.class).style.opacity == 1) {
        document
          .querySelector(link.dataset.class)
          .querySelector(".container")
          .addEventListener("click", (e) => {
            e.stopPropagation();
          });
        document.querySelector(link.dataset.class).onclick = () => {
          document.querySelector(link.dataset.class).style.opacity = 0;
          document.querySelector(link.dataset.class).style.zIndex = -1;
          theNav.style.zIndex = "1000";
          resNav.style.zIndex = "1000";
        };
      }
    }
  });
});
//Exit Footer Popups
popupExit.forEach((exit) => {
  exit.addEventListener("click", () => {
    popupDiv.forEach((div) => {
      div.style.opacity = 0;
      div.style.zIndex = -1;
      theNav.style.zIndex = "1000";
      resNav.style.zIndex = "1000";
    });
  });
});
