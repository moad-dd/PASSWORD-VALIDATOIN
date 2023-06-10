// const inputPass = document.querySelector(".pass-field input");
// const eyeIcon = document.querySelector(".pass-field i");
// const requirementList = document.querySelectorAll(".requirement-list li ");

// // An array of password requirements with corresponding
// // regular expressions and index of the requirement list item
// const requirements = [
//   { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
//   { regex: /[0-9]/, index: 1 }, // At least one number
//   { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
//   { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
//   { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
// ];

// inputPass.addEventListener("keyup", (a) => {
//   requirements.forEach((item) => {
//     const isvalid = item.regex.test(a.target.value);
//     const requirementItem = requirementList[item.index];

//     if (isvalid) {
//       requirementItem.firstElementChild.className = "fa-solid fa-check";
//       requirementItem.classList.add("valid");
//     } else {
//       requirementItem.firstElementChild.className = "fa-solid fa-circle";
//       requirementItem.classList.remove("valid");
//     }
//   });
// });

// eyeIcon.addEventListener("click", () => {
//   // toggling the input type
//   inputPass.type = inputPass.type == "password" ? "text" : "password";

//   // toggling The eye class
//   eyeIcon.classList = `fa-solid fa-eye${
//     inputPass.type == "password" ? "" : "-slash"
//   }`;
// });


