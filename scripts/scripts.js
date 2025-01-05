$(document).ready(function () {
  // CLOSE NAVBAR ON CLICK
  const navLinks = document.querySelectorAll('.nav-item');
  navLinks.forEach((elem) => {
    elem.addEventListener('click', () => {
      $("button.navbar-toggler").click();
    });
  });
  
  // LOCOMOTIVE
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true }
  });

  // SPLIDE
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

  // COUNTDOWN
  var countDownDate = new Date("Feb 14, 2025 15:37:25").getTime();
  var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      $("#COUNTDOWN").html("JEDDAH E-PRIX STARTS IN " + days + "d " + hours + "h " + minutes + "m " + seconds + "s");
      if (distance < 0) {
          clearInterval(x);
          $("#COUNTDOWN").html("NOW");
      }
  }, 1000);

  // TABLE 
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
  function populateTable(filter) {
    const tableBody = $("#table-body");
    tableBody.empty();
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

  // TABLE BUTTONS
  $(".filter-buttons button").on("click", function () {
    $(".filter-buttons button").removeClass("active btn-primary").addClass("btn-outline-primary");
    $(this).addClass("active btn-primary").removeClass("btn-outline-primary");
    const filter = $(this).data("filter");
    populateTable(filter);
  });
  populateTable("mexico");

  // CALENDAR
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
  const $calendarDays = $(".calendar-days");
    
  for (let day = 1; day <= 30; day++) {
    const $dayElement = $("<div>")
      .addClass("calendar-day")
      .text(day);
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
}); // DOM LOAD