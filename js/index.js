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

let nav = document.querySelectorAll("nav a");
let ctaText = document.querySelectorAll(".cta-text *");
let ctaImg = document.getElementById("cta-img");
let mainContent = document.querySelectorAll(".text-content *");
let middleImg = document.getElementById("middle-img");
let contact = document.querySelectorAll(".contact *");
let footer = document.querySelector("footer p");

ctaImg.setAttribute("src", siteContent.cta["img-src"]);
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
footer.textContent = siteContent.footer.copyright;

function appendElement(parent, element, text, attributes) {
    let node = document.createElement(element);
    let textNode = document.createTextNode(text);
    node.appendChild(textNode);
    console.log(attributes);
    if (typeof attributes !== "undefined") {
        for (i = 0; attributes.length > i; i++) {
            node.setAttribute(attributes[i][0], attributes[i][1]);
            console.log("true");
        }
    }
    document.querySelector(parent).appendChild(node);
}

document
    .querySelector("button")
    .addEventListener("click", event => (event.target.textContent = "clicked"));

function reverseNav() {
    let nav = document.querySelectorAll("nav a");
    for (i = 0; i < nav.length; i++) {
        nav[i].parentNode.prepend(nav[i]);
    }
}

for (let i = 0; i < nav.length; i++) {
    nav[i].textContent = Object.values(siteContent.nav)[i];
    nav[i].style.color = "green";
}

for (let i = 0; i < ctaText.length; i++) {
    ctaText[i].textContent = Object.values(siteContent.cta)[i];
}

for (let i = 0; i < mainContent.length; i++) {
    if (i > 3) {
        mainContent[i].textContent = Object.values(siteContent["main-content"])[
            i + 1
        ];
    } else {
        mainContent[i].textContent = Object.values(siteContent["main-content"])[
            i
        ];
    }
}

for (let i = 0; i < contact.length; i++) {
    contact[i].textContent = Object.values(siteContent.contact)[i];
}

appendElement("nav", "a", "lorem", [["href", "#"], ["style", "color: green"]]);
appendElement("nav", "a", "ipsum", [["href", "#"], ["style", "color: green"]]);
document.querySelector("body").style.backgroundColor = "RGB(30, 30 , 30)";
document.querySelector(".container").style.backgroundColor = "white";
