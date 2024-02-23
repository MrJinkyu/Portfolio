const filters = document.querySelector(".project_filters");
const projects = document.querySelectorAll(".project_item");
const projectList = document.querySelector(".project_list");

filters.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter;
  if (filter == null) {
    return;
  }
  handleSelectedFilter(e.target);
  handleMoveSelectedBar(filter);
  handleProjectsFilter(filter);
});

function handleSelectedFilter(target) {
  const current = document.querySelector(".filter_item.selected");
  current.classList.remove("selected");
  target.classList.add("selected");
}

function handleMoveSelectedBar(filter) {
  const selectedBar = document.querySelector(".selected-bar");

  if (filter === "all") {
    selectedBar.style.transform = "translateX(0px)";
  } else if (filter === "personal") {
    selectedBar.style.transform = "translateX(182px)";
  } else if (filter === "team") {
    selectedBar.style.transform = "translateX(364px)";
  }
}

function handleProjectsFilter(filter) {
  projectList.classList.add("out");

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "all" || project.dataset.category === filter) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
    projectList.classList.remove("out");
  }, 300);
}
