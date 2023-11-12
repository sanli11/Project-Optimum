const floatingButton = document.querySelector("#floating-button");

const facebookTop = document.querySelector("#facebook");
const twitterTop = document.querySelector("#twitter");
const instagramTop = document.querySelector("#instagram");

const allServices = document.querySelector("#view-services");
const allProjects1 = document.querySelector("#view-projects");
const allProjects2 = document.querySelector("#all-projects");

const address = document.querySelector("#address");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

const facebookBottom = document.querySelector("#fb");
const twitterBottom = document.querySelector("#tw");
const instagramBottom = document.querySelector("#ig");

const submit = document.querySelector("#submit");

floatingButton.addEventListener("click", () => {
  const name = document.querySelector("#name");
  name.focus();
});

facebookTop.addEventListener("click", () => {
  window.open("https://www.facebook.com", "_blank");
});

twitterTop.addEventListener("click", () => {
  window.open("https://www.twitter.com", "_blank");
});

instagramTop.addEventListener("click", () => {
  window.open("https://www.instagram.com", "_blank");
});

allServices.addEventListener("click", () => {
  window.location.replace("services.html");
});

allProjects1.addEventListener("click", () => {
  window.location.replace("projects.html");
});

allProjects2.addEventListener("click", () => {
  window.location.replace("projects.html");
});

address.addEventListener("click", () => {
  window.open("https://maps.app.goo.gl/5m1g4FdhL5N5Hjdr6", "_blank");
});

email.addEventListener("click", () => {
  window.open("mailto:info@optimum-remodeling.com", "_blank");
});

phone.addEventListener("click", () => {
  window.open("tel:+1-888-405-8908", "_blank");
});

facebookBottom.addEventListener("click", () => {
  window.open("https://www.facebook.com", "_blank");
});

twitterBottom.addEventListener("click", () => {
  window.open("https://www.twitter.com", "_blank");
});

instagramBottom.addEventListener("click", () => {
  window.open("https://www.instagram.com", "_blank");
});

submit.addEventListener("click", () => {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const message = document.querySelector("#message");

  if (name.validity.valueMissing) {
    name.setCustomValidity("Please enter your name");
  } else {
    name.setCustomValidity("");
  }

  if (email.validity.valueMissing) {
    email.setCustomValidity("Please enter your email");
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email");
  } else {
    email.setCustomValidity("");
  }

  if (phone.validity.valueMissing) {
    phone.setCustomValidity("Please enter your phone number");
  } else {
    phone.setCustomValidity("");
  }

  if (message.validity.valueMissing) {
    message.setCustomValidity("Please enter your message");
  } else {
    message.setCustomValidity("");
  }
});
