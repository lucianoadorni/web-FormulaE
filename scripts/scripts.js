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


const events = {
  12: {
    title: "Miami Grand Prix",
    description: "Experience the thrill of the Miami Grand Prix! Round 5 of the championship.",
    image: "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Miami+GP",
    link: "#"
  },
  15: {
    title: "Driver Meet & Greet",
    description: "Meet your favorite drivers and get autographs!",
    image: "https://via.placeholder.com/300x200/00FF00/FFFFFF?text=Meet+Drivers",
    link: "#"
  },
  22: {
    title: "Pit Lane Walk",
    description: "Explore the pit lane and get an inside look at the teams in action.",
    image: "https://via.placeholder.com/300x200/0000FF/FFFFFF?text=Pit+Lane+Walk",
    link: "#"
  }
};

// Generate calendar days
const calendarDays = document.querySelector(".calendar-days");
for (let day = 1; day <= 30; day++) {
  const dayElement = document.createElement("div");
  dayElement.className = "calendar-day";
  dayElement.textContent = day;

  // Add click event to show event details
  dayElement.addEventListener("click", () => {
    const event = events[day];
    if (event) {
      document.getElementById("event-date").textContent = `April ${day}`;
      document.getElementById("event-title").textContent = event.title;
      document.getElementById("event-description").textContent = event.description;
      document.getElementById("event-image").src = event.image;
      document.getElementById("event-link").href = event.link;
    } else {
      document.getElementById("event-date").textContent = `April ${day}`;
      document.getElementById("event-title").textContent = "No Events";
      document.getElementById("event-description").textContent = "No events scheduled for this day.";
      document.getElementById("event-image").src = "https://via.placeholder.com/300x200/CCCCCC/000000?text=No+Events";
      document.getElementById("event-link").href = "#";
    }
  });

  calendarDays.appendChild(dayElement);
}