var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml13 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.ml13 .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
});


document.addEventListener('DOMContentLoaded', function () {
  new Splide('#splide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '1rem',
    breakpoints: {
      768: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    },
  }).mount();
});

const data = {
  mexico: [
    { position: 1, driver: "Driver A", team: "Team X", time: "45:14:758" },
    { position: 2, driver: "Driver B", team: "Team Y", time: "+00:384" },
    { position: 3, driver: "Driver C", team: "Team Z", time: "+00:844" },
  ],
  jeddah: [
    { position: 1, driver: "Driver D", team: "Team A", time: "46:12:678" },
    { position: 2, driver: "Driver E", team: "Team B", time: "+00:290" },
    { position: 3, driver: "Driver F", team: "Team C", time: "+00:740" },
  ],
  monaco: [
    { position: 1, driver: "Driver G", team: "Team M", time: "43:22:958" },
    { position: 2, driver: "Driver H", team: "Team N", time: "+00:540" },
    { position: 3, driver: "Driver I", team: "Team O", time: "+01:084" },
  ],
};

// Function to populate the table
function populateTable(filter) {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = ""; // Clear current table data

  data[filter].forEach((item) => {
    const row = `
      <tr>
        <td>${item.position}</td>
        <td>${item.driver}</td>
        <td>${item.team}</td>
        <td>${item.time}</td>
      </tr>
    `;
    tableBody.insertAdjacentHTML("beforeend", row);
  });
}

// Event listener for filter buttons
document.querySelectorAll(".filter-buttons button").forEach((button) => {
  button.addEventListener("click", (e) => {
    document.querySelectorAll(".filter-buttons button").forEach((btn) => btn.classList.remove("active", "btn-primary"));
    e.target.classList.add("active", "btn-primary");
    e.target.classList.remove("btn-outline-primary");

    const filter = e.target.getAttribute("data-filter");
    populateTable(filter);
  });
});

// Initial population with "mexico" data
populateTable("mexico");