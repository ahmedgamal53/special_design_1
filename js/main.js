// select landing page elements

let landingpage = document.querySelector(".landing-page");

let imgarry = ["1.jpg", "2.jpg", "3.avif", "4.jpg", "5.jpg"];

// random background option

let backgroundoption = true;
let backgroundinterval;

let randomback = document.querySelectorAll(".random-backgrouns span");

if (window.localStorage.getItem("background")) {
  landingpage.style.backgroundImage = window.localStorage.getItem("background");
}

if (window.localStorage.getItem("backgroundoption")) {
  if (window.localStorage.getItem("backgroundoption") === "true") {
    backgroundoption = true;
    randomback.forEach((span) => {
      span.classList.remove("active");
      if (span.dataset.background === "yes") {
        span.classList.add("active");
      }
    });
  } else {
    backgroundoption = false;
    randomback.forEach((span) => {
      span.classList.remove("active");
      if (span.dataset.background === "no") {
        span.classList.add("active");
      }
    });
  }
}

randomback.forEach((span) => {
  span.addEventListener("click", (e) => {
    randomback.forEach((sp) => {
      sp.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    if (e.currentTarget.dataset.background === "yes") {
      backgroundoption = true;
      randombackground();
      localStorage.setItem("backgroundoption", true);
    } else {
      backgroundoption = false;
      clearInterval(backgroundinterval);
      localStorage.setItem("backgroundoption", false);
    }
  });
});

function randombackground() {
  if (backgroundoption === true) {
    backgroundinterval = setInterval(() => {
      let randomnumber = Math.floor(Math.random() * imgarry.length);
      landingpage.style.backgroundImage = `url("imgs/${imgarry[randomnumber]}")`;
      localStorage.setItem("background", landingpage.style.backgroundImage);
    }, 1000);
  }
}
randombackground();

// bullets

let testbullet = document.querySelectorAll(".option-box .testing-option span");
let navbullet = document.querySelector(".nav-bullets");

if (window.localStorage.getItem("bullet")) {
  if (window.localStorage.getItem("bullet") === "true") {
    navbullet.style.display = "block";
    testbullet.forEach((span) => {
      span.classList.remove("active");
      if (span.dataset.background === "yes") {
        span.classList.add("active");
      }
    });
  }
  if (window.localStorage.getItem("bullet") === "false") {
    navbullet.style.display = "none";
    testbullet.forEach((span) => {
      span.classList.remove("active");
      if (span.dataset.background === "no") {
        span.classList.add("active");
      }
    });
  }
}

testbullet.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    testbullet.forEach((span) => {
      span.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    if (e.currentTarget.dataset.background == "yes") {
      navbullet.style.display = "block";
      localStorage.setItem("bullet", true);
    } else {
      navbullet.style.display = "none";
      localStorage.setItem("bullet", false);
    }
  });
});

//reset button

let reset = document.querySelector(".reset-option");

reset.addEventListener("click", (e) => {
  localStorage.removeItem("background");
  localStorage.removeItem("backgroundoption");
  localStorage.removeItem("bullet");
  localStorage.removeItem("color");
  window.location.reload();
});

// toggle spin class on icon

let icons = document.querySelector(".toggle-settings i");
let icon = document.querySelector(".toggle-settings");
let settingbox = document.querySelector(".setting-box");

icon.addEventListener("click", () => {
  settingbox.classList.toggle("open");
  icons.classList.toggle("fa-spin");
});

//switch colors
let colorsli = document.querySelectorAll(".colors-list li");
let backcolor = document.querySelector(".overlay");

if (window.localStorage.getItem("color")) {
  backcolor.style.backgroundColor = window.localStorage.getItem("color");
  colorsli.forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.color === window.localStorage.getItem("color")) {
      li.classList.add("active");
    }
  });
}

if (window.localStorage.getItem("main-color")) {
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.getItem("main-color")
  );
}

colorsli.forEach((lis) => {
  lis.addEventListener("click", (li) => {
    colorsli.forEach((e) => {
      e.classList.remove("active");
    });
    li.currentTarget.classList.add("active");
    backcolor.style.backgroundColor = li.currentTarget.dataset.color;
    window.localStorage.setItem("color", li.currentTarget.dataset.color);
    document.documentElement.style.setProperty(
      "--main-color",
      li.currentTarget.dataset.color
    );
    window.localStorage.setItem("main-color", li.currentTarget.dataset.color);
  });
});

//select all skills section elements
let skills = document.querySelector(".skills");

window.onscroll = function () {
  // skills offset top
  let skillsoffsettop = skills.offsetTop;
  // skills outer height
  let skillsouterheight = skills.offsetHeight;
  // window height
  let windowheight = this.innerHeight;
  // window scroll top
  let windowscrolltop = this.pageYOffset;
  if (windowscrolltop > skillsoffsettop + skillsouterheight - windowheight) {
    let allskills = document.querySelectorAll(
      ".skills-box .skills-progress span"
    );
    allskills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

//create popup with image

let ourgalerry = document.querySelectorAll(".gallery img");

ourgalerry.forEach((img) => {
  img.addEventListener("click", (e) => {
    let overlaya = document.createElement("div");
    overlaya.className = "popup-overlay";

    document.body.appendChild(overlaya);

    let popupbox = document.createElement("div");
    popupbox.className = "popup-box";

    let popupimg = document.createElement("img");
    popupimg.src = e.target.src;

    popupbox.appendChild(popupimg);
    document.body.appendChild(popupbox);

    //creat close span
    let closebutton = document.createElement("span");
    let closebuttontext = document.createTextNode("X");
    closebutton.className = "close-button";

    closebutton.addEventListener("click", () => {
      overlaya.remove();
      popupbox.remove();
      closebutton.style.display = "none";
    });

    closebutton.appendChild(closebuttontext);
    document.body.appendChild(closebutton);
  });
});

let bullets = document.querySelectorAll(".nav-bullets .bullet");

const alllinks = document.querySelectorAll(".header-area .links a");

function scrolltosomwewhere(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();

      document.querySelector(e.currentTarget.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

scrolltosomwewhere(alllinks);
scrolltosomwewhere(bullets);

let togglemenu = document.querySelector(".toggle-menu");

let links = document.querySelector(".landing-page .links");

togglemenu.addEventListener("click", (e) => {
  e.stopPropagation();

  links.classList.toggle("open");
  togglemenu.classList.toggle("menu-active");
});

document.addEventListener("click", (e) => {
  if (e.target !== togglemenu && e.target !== links) {
    if (links.classList.contains("open")) {
      links.classList.toggle("open");
      togglemenu.classList.toggle("menu-active");
    }
  }
});

links.onclick = function (e) {
  e.stopPropagation();
};
