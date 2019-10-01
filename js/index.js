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


//this is to add content to the header

const links = document.querySelectorAll("a");

links[0].textContent = "services";
links[1].textContent = "Product";
links[2].textContent = "Vision";
links[3].textContent = "Features";
links[4].textContent = "About";
links[5].textContent = "Contact";

const header = document.querySelector("header");
header.style.backgroundColor = "green";
//this ends the header content

//this is the beginning of the cta section
const ctaH1 = document.querySelector("h1");

ctaH1.textContent = "Dom is Awesome";
const ctaBtn = document.querySelector("button");
ctaBtn.textContent = "Get Started";

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
//this is the end of the cta section

//this begins the Main-content section
//This is to add Content to the Top-Content div in Main-Content Section
const h4Content = document.querySelectorAll("h4");
const pContent = document.querySelectorAll("p");

h4Content[0].textContent = siteContent["main-content"]["features-h4"];
h4Content[1].textContent = siteContent["main-content"]["about-h4"];

pContent[0].textContent = siteContent["main-content"]["features-content"];
pContent[1].textContent = siteContent["main-content"]["about-content"];

const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
//this ends content for the top-content div of main-content section

//this is to add content to the bottom-content div of main-content section
h4Content[2].textContent = siteContent["main-content"]["services-h4"];
h4Content[3].textContent = siteContent["main-content"]["product-h4"];
h4Content[4].textContent = siteContent["main-content"]["vision-h4"];

pContent[2].textContent = siteContent["main-content"]["services-content"];
pContent[3].textContent = siteContent["main-content"]["product-content"];
pContent[4].textContent = siteContent["main-content"]["vision-content"];
//this ends content for the bottom-content div of main-content section
//this is the end of the main-content section

//this is the beginning of the contact section
h4Content[5].textContent = siteContent ["contact"]["contact-h4"];

pContent[5].textContent = siteContent["contact"]["address"];
pContent[6].textContent = siteContent["contact"]["phone"];
pContent[7].textContent = siteContent["contact"]["email"];
//this is the end of the contact section

//this is the footer section
pContent[8].textContent = siteContent["footer"]["copyright"];
//this ends the footer section

//this is to add new items to the nav
const newNavItem1 = document.createElement('a');
newNavItem1.setAttribute('href', '#');
newNavItem1.textContent = "Item 1";
console.log(newNavItem1);

const newNavItem2 = document.createElement('a');
newNavItem2.setAttribute('href', '#');
newNavItem2.textContent = "Item 2";
console.log(newNavItem2);


const navParent = document.querySelector('nav');

navParent.prepend(newNavItem1);
navParent.append(newNavItem2);
//this ends adding new items to the nav

//this is to change styles to the page 
links.forEach(element => {
  element.style.color = "red"
})

h4Content.forEach( element => {
  element.style.color = "blue";
})

ctaH1.style.color = "seagreen"


//stretch goal 
const deleteImg = document.querySelector('#logo-img')

deleteImg.addEventListener('click',function(e){
  const btn = e.target.parentElement;

  btn.parentNode.removeChild(btn);
})
