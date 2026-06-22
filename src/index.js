import appleTart from "./assets/apple-tart.png";



const content = document.getElementById("content");

const img = document.createElement("img");
img.src = appleTart;
img.alt = "An apple tart";

const heading = document.createElement("h1");
heading.textContent = "Welcome to Our Restaurant";

const paragraph = document.createElement("p");
paragraph.textContent =
    "Experience culinary excellence at its finest. Our restaurant offers an exquisite dining experience with a carefully curated menu featuring the freshest ingredients and innovative dishes. From the warm ambiance to our exceptional service, every detail is designed to make your visit unforgettable. Join us for an evening of delicious food, fine beverages, and cherished memories with loved ones.";

content.appendChild(img);
content.appendChild(heading);
content.appendChild(paragraph);