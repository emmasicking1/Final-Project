const themeBtn = document.getElementById("themeBtn");

// Check saved theme when page loads
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Toggle theme when button is clicked
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  // Save theme choice
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
