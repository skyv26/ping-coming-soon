let firstAttempt = false;

const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const hoverOn = (object) => {
  object.style.backgroundColor = "hsl(223, 87%, 63%)";
  object.querySelector(".social-icon path").style.fill = "white";
};

const hoverOff = (object) => {
  object.style.backgroundColor = "initial";
  object.querySelector(".social-icon path").style.fill = "hsl(223, 87%, 63%)";
};

const inCorrectInput = (
  defaultMsg = "Whoops! It looks like you forgot to add your email"
) => {

  document.getElementsByClassName("error-msg")[0].style.cssText = `
          opacity: 1;
          transition: all 0.5s ease-in-out;
      `;
  document.getElementsByClassName("error-msg")[0].textContent = defaultMsg;
};

document
  .getElementsByClassName("form-submit")[0]
  .addEventListener("click", (event) => {
    const userMail = document.getElementsByClassName("user-email")[0].value;
    document.getElementsByClassName("header-form")[0].classList.add("gap");
    if (userMail.length === 0) {
      firstAttempt = true;
      document.getElementsByClassName("user-email")[0].style.outlineColor =
      "hsl(354, 100%, 66%)";  
      inCorrectInput();
      event.preventDefault();
    } else if (!re.test(userMail)) {
      firstAttempt = true;
      event.preventDefault();
      document.getElementsByClassName("user-email")[0].style.outlineColor =
      "hsl(354, 100%, 66%)";  
      inCorrectInput("Please provide a valid email address");
    }
  });

const userEmailValidator = () => {
  const userMail = document.getElementsByClassName("user-email")[0].value;

  if (firstAttempt) {
    if (userMail.length === 0) {
      inCorrectInput();
    } else {
      if (re.test(userMail)) {
        document.getElementsByClassName("error-msg")[0].style.cssText = `
          opacity: 0;
          transition: all 0.5s ease-in-out;`;
        document.getElementsByClassName("user-email")[0].style.outlineColor =
          "hsl(223, 100%, 88%)";

        document
          .getElementsByClassName("header-form")[0]
          .classList.remove("gap");
        inCorrectInput("");
      } else {
        document.getElementsByClassName("user-email")[0].style.outlineColor =
          "hsl(354, 100%, 66%)";

        document.getElementsByClassName("header-form")[0].classList.add("gap");
        inCorrectInput("Please provide a valid email address");
      }
    }
  }
};
