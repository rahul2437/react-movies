import * as Yup from "yup";

export function configureValidation() {
  Yup.addMethod(Yup.string, "firstLetterUpperCase", function () {
    return this.test(
      "first-letter-uppercase",
      "First letter must be uppercase",
      function (value) {
        if (value && value.length > 0) {
          const firstLetter = value.substring(0, 1);
          return firstLetter === firstLetter.toUpperCase();
        }
        return true;
      }
    );
  });
}
