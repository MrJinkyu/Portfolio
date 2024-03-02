const sectionIds = ["#home", "#about", "#skills", "#projects", "#contact"];
const sections = sectionIds.map((id) => document.querySelector(id));

const options = {
  rootMargin: "10% 0px 0px 0px",
  threshold: 0.2,
};
const observer = new IntersectionObserver(observerCallback, options);

sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      switch (entry.target.id) {
        case "home":
          entry.target.querySelector(".door").classList.add("active");
          break;
        case "about":
          break;
        case "skills":
          entry.target
            .querySelectorAll(".bar_value")
            .forEach((item) => item.classList.add("active"));
          break;
        case "contact":
          entry.target.querySelector(".contact_title").classList.add("active");
          entry.target
            .querySelectorAll(".contact_item")
            .forEach((item) => item.classList.add("active"));
          break;
        default:
          break;
      }
    } else {
      switch (entry.target.id) {
        case "home":
          entry.target.querySelector(".door").classList.remove("active");
          break;
        case "about":
          break;
        case "skills":
          entry.target
            .querySelectorAll(".bar_value")
            .forEach((item) => item.classList.remove("active"));
          break;
        case "contact":
          entry.target
            .querySelector(".contact_title")
            .classList.remove("active");
          entry.target
            .querySelectorAll(".contact_item")
            .forEach((item) => item.classList.remove("active"));
          break;
        default:
          break;
      }
    }
  });
}
