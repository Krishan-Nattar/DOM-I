const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let navTag = document.querySelector("nav");

let anchorTags = document.querySelectorAll("a");
anchorTags.forEach(function(item, index, array) {
  item.innerText = siteContent["nav"][`nav-item-${index + 1}`];
  item.style.color = "green";
});

const newAnchor = document.createElement("a");
const newAnchor2 = document.createElement("a");

newAnchor.textContent = "Blog";
newAnchor2.textContent = "Portfolio";
newAnchor.style.color = "green";
newAnchor2.style.color = "green";

navTag.appendChild(newAnchor);
navTag.prepend(newAnchor2);

const ctaText = document.querySelector(".cta-text h1");

let ctaArray = siteContent["cta"]["h1"].split(" ");

ctaArray.splice(1, 0, "\r\n");
ctaArray.splice(3, 0, "\r\n");

ctaText.innerText = ctaArray.join(" ");

const allParagraphs = document.querySelectorAll("p");

const ctaButton = document.querySelector(".cta-text button");

const cta = document.querySelector(".cta-text");
const clickButton = document.createElement("button");
clickButton.innerText = "Click to turn red";
cta.appendChild(clickButton);

ctaButton.innerText = siteContent["cta"]["button"];

clickButton.addEventListener("click", event => {
  ctaText.style.color = "red";
});

const topH4 = document.querySelectorAll(".top-content .text-content h4");

topH4[0].innerText = siteContent["main-content"]["features-h4"];
topH4[1].innerText = siteContent["main-content"]["about-h4"];

const topP = document.querySelectorAll(".top-content .text-content p");
topP[0].innerText = siteContent["main-content"]["features-content"];
topP[1].innerText = siteContent["main-content"]["features-content"];

const bottomH4 = document.querySelectorAll(".bottom-content .text-content h4");

bottomH4[0].innerText = siteContent["main-content"]["services-h4"];
bottomH4[1].innerText = siteContent["main-content"]["product-h4"];
bottomH4[2].innerText = siteContent["main-content"]["vision-h4"];

const bottomP = document.querySelectorAll(".bottom-content .text-content p");

bottomP[0].innerText = siteContent["main-content"]["services-content"];

bottomP[1].innerText = siteContent["main-content"]["product-content"];

bottomP[2].innerText = siteContent["main-content"]["vision-content"];

const contactH4 = document.querySelector(".contact h4");
contactH4.innerText = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll(".contact p");

let addressArray = siteContent["contact"]["address"].split(" ");

addressArray.splice(4, 0, "\r\n");

contactP[0].innerText = addressArray.join(" ");
contactP[1].innerText = siteContent["contact"]["phone"];
contactP[2].innerText = siteContent["contact"]["email"];

const footerP = document.querySelector("footer p");

footerP.innerText = siteContent["footer"]["copyright"];
