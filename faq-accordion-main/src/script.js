function initAccordion() {
  const accordionList = document.querySelectorAll(".accordion h2");

  accordionList[0].classList.add("active");
  accordionList[0].nextElementSibling.classList.add("active");

  function activeAccordion() {
    const isActive = this.classList.contains("active");
    accordionList.forEach((item) => {
      item.classList.remove("active");
      item.nextElementSibling.classList.remove("active");
    });

    if (!isActive) {
      this.classList.add("active");
      this.nextElementSibling.classList.add("active");
    }
  }

  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}

initAccordion();
