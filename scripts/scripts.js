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
    perPage: 5,
    perMove: 1,
    gap: '1rem',
    breakpoints: {
      1320: {
        perPage: 4,
      },
      1050: {
        perPage: 3,
      },
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
  const tableBody = $("#table-body");
  tableBody.empty(); // Clear current table data

  $.each(data[filter], function (index, item) {
    const row = `
      <tr>
        <td>${item.position}</td>
        <td>${item.driver}</td>
        <td>${item.team}</td>
        <td>${item.time}</td>
      </tr>
    `;
    tableBody.append(row);
  });
}

// Event listener for filter buttons
$(".filter-buttons button").on("click", function () {
  // Remove classes from all buttons
  $(".filter-buttons button").removeClass("active btn-primary").addClass("btn-outline-primary");

  // Add classes to the clicked button
  $(this).addClass("active btn-primary").removeClass("btn-outline-primary");

  // Get the filter attribute and populate the table
  const filter = $(this).data("filter");
  populateTable(filter);
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
const $calendarDays = $(".calendar-days");
  
for (let day = 1; day <= 30; day++) {
  const $dayElement = $("<div>")
    .addClass("calendar-day")
    .text(day);

  // Add click event to show event details
  $dayElement.on("click", function () {
    const event = events[day];
    if (event) {
      $("#event-date").text(`April ${day}`);
      $("#event-title").text(event.title);
      $("#event-description").text(event.description);
      $("#event-image").attr("src", event.image);
      $("#event-link").attr("href", event.link);
    } else {
      $("#event-date").text(`April ${day}`);
      $("#event-title").text("No Events");
      $("#event-description").text("No events scheduled for this day.");
      $("#event-image").attr("src", "https://via.placeholder.com/300x200/CCCCCC/000000?text=No+Events");
      $("#event-link").attr("href", "#");
    }
  });

  $calendarDays.append($dayElement);
}