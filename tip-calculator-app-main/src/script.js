document.addEventListener("DOMContentLoaded", function () {
  const billInput = document.getElementById("bill");
  const spanBill = document.getElementById("span-bill");
  const totalPeople = document.getElementById("people");
  const resetBtn = document.getElementById("resetBtn");
  const custom = document.getElementById("custom");
  const totalAmount = document.getElementById("total_amount");
  const tipAmount = document.getElementById("tip_amount");
  const btns = document.querySelectorAll(".btn");
  let selectedBtnValue;

  // Function to handle any input change
  function handleInput() {
    billValue();
    countPerson();
    calculateTip();
  }

  // Function to select a tip percentage button
  function selectBtn(btnValue) {
    btns.forEach((e) => {
      e.classList.remove("active");
    });
    btns.forEach((ele) => {
      if (ele.value === btnValue) {
        ele.classList.add("active");
        custom.value = "";
        selectedBtnValue = btnValue;
        ele.style.backgroundColor = "hsl(172, 67%, 45%)";
        ele.style.color = "hsl(183, 100%, 15%)";
      } else {
        ele.style.color = "white";
        ele.style.backgroundColor = "hsl(183, 100%, 15%)";
      }
    });
  }

  // Function to calculate tip
  function calculateTip() {
    const billAmount = Number(billInput.value);
    const numPeople = Number(totalPeople.value);
    const customValue = Number(custom.value);
    const tipPercentage = customValue || parseInt(selectedBtnValue);

    if (numPeople > 0 && !isNaN(billAmount)) {
      const billPerPerson = billAmount / numPeople;
      const tipAmountPerson = (tipPercentage * billPerPerson) / 100;

      if (customValue > 0 || selectedBtnValue > 0) {
        tipAmount.textContent = tipAmountPerson.toFixed(2);
        totalAmount.textContent = (billPerPerson + tipAmountPerson).toFixed(2);
      } else {
        totalAmount.textContent = "0";
      }
    }
  }

  // Function to handle bill input
  function billValue() {
    totalAmount.innerHTML = "0";
    tipAmount.innerHTML = "0";

    const billAmount = Number(billInput.value);
    const numPeople = Number(totalPeople.value);

    if (billAmount === 0 || isNaN(billAmount)) {
      spanBill.classList.remove("hidden");
      billInput.classList.add("error");
    } else if (numPeople === 0) {
      // Display error message if total number of people is zero
      totalAmount.innerHTML = "";
      tipAmount.innerHTML = "";
      totalPeople.classList.add("error");
    } else {
      spanBill.classList.add("hidden");
      billInput.classList.remove("error");
      calculateTip(); // Calculate tip when bill input is valid and number of people is provided
    }
  }

  // Function to handle total number of people input
  function countPerson() {
    totalAmount.innerHTML = "0";
    tipAmount.innerHTML = "0";

    const numPeople = Number(totalPeople.value);
    const billAmount = Number(billInput.value);

    if (numPeople === 0 || isNaN(numPeople)) {
      // Display error message if total number of people is zero
      totalAmount.innerHTML = "";
      tipAmount.innerHTML = "";
      totalPeople.classList.add("error");
    } else if (billAmount === 0) {
      spanBill.classList.remove("hidden");
      billInput.classList.add("error");
    } else {
      totalPeople.classList.remove("error");
      calculateTip(); // Calculate tip when number of people is provided and bill input is valid
    }
  }

  // Add input event listener to bill input field
  billInput.addEventListener("input", handleInput);

  // Add input event listener to total people input field
  totalPeople.addEventListener("input", handleInput);

  // Add input event listener to custom tip percentage input field
  custom.addEventListener("input", function () {
    selectedBtnValue = null;
    btns.forEach((e) => {
      e.classList.remove("active");
    });
    calculateTip(); // Calculate tip when custom tip percentage is input
  });

  // Loop through each tip percentage button
  btns.forEach((ele) => {
    // Add click event listener to each button
    ele.addEventListener("click", (e) => {
      selectBtn(e.target.value);
      calculateTip(); // Calculate tip when a tip button is clicked
    });
  });

  // Add click event listener to reset button
  resetBtn.addEventListener("click", function () {
    window.location.reload();
  });
});
