import "./index.css";
import {
  getActualDonateSum,
  addDonateToList,
  isValidate,
} from "./src/utils.js";

const buttonHTML = document.querySelector(".donate-form__submit-button");
buttonHTML?.addEventListener("click", (event) => {
  // add donate to donates list
  const donateHTML = document.querySelector(".donate-form__donate-input");
  const donateValue = Number(donateHTML.value);
  if (!isValidate(donateValue)) {
    console.error(`Can't donate '${donateValue}' value`);
    donateHTML.value = ""; // clear input form
    return;
  }
  addDonateToList(donateValue);

  // update donate sum
  const donateSumHTML = document.querySelector("#total-amount");
  const donateSum = getActualDonateSum();
  donateSumHTML.textContent = String(donateSum) + "$";

  // clear input form
  donateHTML.value = "";
});
