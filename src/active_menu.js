const sectionIds = ["#home", "#about", "#skills", "#projects", "#contact"];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);
const visibleSections = sectionIds.map(() => false);
let selectedNavItem = navItems[0];

const options = {
  rootMargin: `-20% 0px 0px 0px`,
  threshold: [0, 0.98],
};

const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne;
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.95;
  });
  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleSections);
  const navItem = navItems[navIndex];
  selectedNavItem.classList.remove("selected");
  selectedNavItem = navItem;
  selectedNavItem.classList.add("selected");
}

function findFirstIntersecting(visibleSections) {
  const index = visibleSections.indexOf(true);
  // indexOf는 찾고자 하는게 없다면 -1을 반환함
  return index >= 0 ? index : 0;
}
