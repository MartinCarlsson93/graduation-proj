const Accordion = () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      // Toggle the active class on the clicked header
      header.classList.toggle("active");

      // Get the content element for the clicked header
      const content = header.nextElementSibling;

      if (header.classList.contains("active")) {
        // If the header is active, set the max-height of the content element to its scrollHeight to show it
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        // If the header is not active, set the max-height of the content element to 0 to hide it
        content.style.maxHeight = 0;
      }
    });
  });

  return (
    <div class="accordion">
      <div class="accordion-header">Section 1</div>
      <div class="accordion-content">
        <p>Content for section 1</p>
      </div>
      <div class="accordion-header">Section 2</div>
      <div class="accordion-content">
        <p>Content for section 2</p>
      </div>
      <div class="accordion-header">Section 3</div>
      <div class="accordion-content">
        <p>Content for section 3</p>
      </div>
    </div>
  );
};

export default Accordion;
