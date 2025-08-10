let landingpage = document.querySelector(".landing-page"),
  imgarry = ["1.jpg", "2.jpg", "3.avif", "4.jpg", "5.jpg"],
  backgroundoption = !0,
  backgroundinterval,
  randomback = document.querySelectorAll(".random-backgrouns span");
function randombackground() {
  !0 === backgroundoption &&
    (backgroundinterval = setInterval(() => {
      let e = Math.floor(Math.random() * imgarry.length);
      (landingpage.style.backgroundImage = `url("../imgs/${imgarry[e]}")`),
        localStorage.setItem("background", landingpage.style.backgroundImage);
    }, 1e3));
}
window.localStorage.getItem("background") &&
  (landingpage.style.backgroundImage =
    window.localStorage.getItem("background")),
  window.localStorage.getItem("backgroundoption") &&
    ("true" === window.localStorage.getItem("backgroundoption")
      ? ((backgroundoption = !0),
        randomback.forEach((e) => {
          e.classList.remove("active"),
            "yes" === e.dataset.background && e.classList.add("active");
        }))
      : ((backgroundoption = !1),
        randomback.forEach((e) => {
          e.classList.remove("active"),
            "no" === e.dataset.background && e.classList.add("active");
        }))),
  randomback.forEach((e) => {
    e.addEventListener("click", (e) => {
      randomback.forEach((e) => {
        e.classList.remove("active");
      }),
        e.currentTarget.classList.add("active"),
        "yes" === e.currentTarget.dataset.background
          ? ((backgroundoption = !0),
            randombackground(),
            localStorage.setItem("backgroundoption", !0))
          : ((backgroundoption = !1),
            clearInterval(backgroundinterval),
            localStorage.setItem("backgroundoption", !1));
    });
  }),
  randombackground();
let testbullet = document.querySelectorAll(".option-box .testing-option span"),
  navbullet = document.querySelector(".nav-bullets");
window.localStorage.getItem("bullet") &&
  ("true" === window.localStorage.getItem("bullet") &&
    ((navbullet.style.display = "block"),
    testbullet.forEach((e) => {
      e.classList.remove("active"),
        "yes" === e.dataset.background && e.classList.add("active");
    })),
  "false" === window.localStorage.getItem("bullet") &&
    ((navbullet.style.display = "none"),
    testbullet.forEach((e) => {
      e.classList.remove("active"),
        "no" === e.dataset.background && e.classList.add("active");
    }))),
  testbullet.forEach((e) => {
    e.addEventListener("click", (e) => {
      testbullet.forEach((e) => {
        e.classList.remove("active");
      }),
        e.currentTarget.classList.add("active"),
        "yes" == e.currentTarget.dataset.background
          ? ((navbullet.style.display = "block"),
            localStorage.setItem("bullet", !0))
          : ((navbullet.style.display = "none"),
            localStorage.setItem("bullet", !1));
    });
  });
let reset = document.querySelector(".reset-option");
reset.addEventListener("click", (e) => {
  localStorage.removeItem("background"),
    localStorage.removeItem("backgroundoption"),
    localStorage.removeItem("bullet"),
    localStorage.removeItem("color"),
    window.location.reload();
});
let icons = document.querySelector(".toggle-settings i"),
  icon = document.querySelector(".toggle-settings"),
  settingbox = document.querySelector(".setting-box");
icon.addEventListener("click", () => {
  settingbox.classList.toggle("open"), icons.classList.toggle("fa-spin");
});
let colorsli = document.querySelectorAll(".colors-list li"),
  backcolor = document.querySelector(".overlay");
window.localStorage.getItem("color") &&
  ((backcolor.style.backgroundColor = window.localStorage.getItem("color")),
  colorsli.forEach((e) => {
    e.classList.remove("active"),
      e.dataset.color === window.localStorage.getItem("color") &&
        e.classList.add("active");
  })),
  window.localStorage.getItem("main-color") &&
    document.documentElement.style.setProperty(
      "--main-color",
      window.localStorage.getItem("main-color")
    ),
  colorsli.forEach((e) => {
    e.addEventListener("click", (e) => {
      colorsli.forEach((e) => {
        e.classList.remove("active");
      }),
        e.currentTarget.classList.add("active"),
        (backcolor.style.backgroundColor = e.currentTarget.dataset.color),
        window.localStorage.setItem("color", e.currentTarget.dataset.color),
        document.documentElement.style.setProperty(
          "--main-color",
          e.currentTarget.dataset.color
        ),
        window.localStorage.setItem(
          "main-color",
          e.currentTarget.dataset.color
        );
    });
  });
let skills = document.querySelector(".skills");
window.onscroll = function () {
  let e = skills.offsetTop,
    t = skills.offsetHeight,
    l = this.innerHeight;
  this.pageYOffset > e + t - l &&
    document
      .querySelectorAll(".skills-box .skills-progress span")
      .forEach((e) => {
        e.style.width = e.dataset.progress;
      });
};
let ourgalerry = document.querySelectorAll(".gallery img");
ourgalerry.forEach((e) => {
  e.addEventListener("click", (e) => {
    let t = document.createElement("div");
    (t.className = "popup-overlay"), document.body.appendChild(t);
    let l = document.createElement("div");
    l.className = "popup-box";
    let o = document.createElement("img");
    (o.src = e.target.src), l.appendChild(o), document.body.appendChild(l);
    let a = document.createElement("span"),
      r = document.createTextNode("X");
    (a.className = "close-button"),
      a.addEventListener("click", () => {
        t.remove(), l.remove(), (a.style.display = "none");
      }),
      a.appendChild(r),
      document.body.appendChild(a);
  });
});
let bullets = document.querySelectorAll(".nav-bullets .bullet");
const alllinks = document.querySelectorAll(".header-area .links a");
function scrolltosomwewhere(e) {
  e.forEach((e) => {
    e.addEventListener("click", (e) => {
      e.preventDefault(),
        document
          .querySelector(e.currentTarget.dataset.section)
          .scrollIntoView({ behavior: "smooth" });
    });
  });
}
scrolltosomwewhere(alllinks), scrolltosomwewhere(bullets);
let togglemenu = document.querySelector(".toggle-menu"),
  links = document.querySelector(".landing-page .links");
togglemenu.addEventListener("click", (e) => {
  e.stopPropagation(),
    links.classList.toggle("open"),
    togglemenu.classList.toggle("menu-active");
}),
  document.addEventListener("click", (e) => {
    e.target !== togglemenu &&
      e.target !== links &&
      links.classList.contains("open") &&
      (links.classList.toggle("open"),
      togglemenu.classList.toggle("menu-active"));
  }),
  (links.onclick = function (e) {
    e.stopPropagation();
  });
