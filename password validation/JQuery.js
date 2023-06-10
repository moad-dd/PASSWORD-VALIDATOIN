$(document).ready(function () {
  const inputPass = $(".pass-field input");
  const eyeIcon = $(".pass-field i");
  const requirementList = $(".requirement-list li ");

  // An array of password requirements with corresponding
  // regular expressions and index of the requirement list item
  const requirements = [
    { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
    { regex: /[0-9]/, index: 1 }, // At least one number
    { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
    { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
  ];

  inputPass.keyup((e) => {
    requirements.forEach((item) => {
      const isvalid = item.regex.test($(e.target).val());
      const requirementItem = requirementList.eq(item.index);

      if (isvalid) {
        requirementItem.find("i").addClass("fa-solid fa-check");
        requirementItem.addClass("valid");
      } else {
        requirementItem.find("i").addClass("fa-solid fa-circle");
        requirementItem.removeClass("valid");
      }
    });
  });

  eyeIcon.click(() => {
    const inputType =
      inputPass.attr("type") == "password" ? "text" : "password";
    inputPass.attr("type", inputType);
    eyeIcon.toggleClass("fa-eye fa-eye-slash");
  });
});
