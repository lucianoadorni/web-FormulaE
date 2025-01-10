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

  // LOADING SCREEN
  $('.light-strip').each(function(i) {
    (function(self, j) {
        setTimeout(function() {
            $(self).addClass('on');
        },(j*1000)+1000);
    })(this, i);
  });

  if (sessionStorage.getItem('loadingScreenShown') !== 'true') {
    $("#loadingScreen").delay(5000).slideUp(1000, function() {
        // Set the flag in session storage once the loading screen is hidden
        sessionStorage.setItem('loadingScreenShown', 'true');
    });
  } else {
    // Immediately hide the loading screen if it has been shown in this session
    $("#loadingScreen").hide();
  }

  // TABLE 
  const data = {
  mexico: [
    { position: 1, driver: "Pascal Wehrlein", team: "TAG HEUER", time: "50:15:506" },
    { position: 2, driver: "Sébastien Buemi", team: "ENVISION RACING", time: "50:16:668" },
    { position: 3, driver: "Nick Cassidy", team: "JAGUAR TCS RACING", time: "50:17:585" },
  ],
  jeddah: [
    { position: 1, driver: "Jake Dennis", team: "ANDRETTI FORMULA E", time: "45:56:452" },
    { position: 2, driver: "Jean-Éric Vergne", team: "DS PENSKE", time: "46:09:741" },
    { position: 3, driver: "Nick Cassidy", team: "JAGUAR TCS RACING", time: "46:09:741" },
  ],
  monaco: [
    { position: 1, driver: "Mitch Evans", team: "JAGUAR TCS RACING", time: "58:15:455" },
    { position: 2, driver: "Nick Cassidy", team: "JAGUAR TCS RACING", time: "58:16:401" },
    { position: 3, driver: "Stoffel Vandoorne", team: "MASERATI MSG RACING", time: "58:19:290" },
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
      image: "Media/imagenes/Jaguar4.webp",
      link: "#"
    },
    15: {
      title: "Driver Meet & Greet",
      description: "Meet your favorite drivers and get autographs!",
      image: "Media/imagenes/politica_sostenibilidad.webp",
      link: "#"
    },
    22: {
      title: "Pit Lane Walk",
      description: "Explore the pit lane and get an inside look at the teams in action.",
      image: "Media/imagenes/Jaguar3.webp",
      link: "#"
    }
  };
  const $calendarDays = $(".calendar-days");
    
  for (let day = 1; day <= 31; day++) {
    const $dayElement = $("<div>")
      .addClass("calendar-day")
      .text(day);
    $dayElement.on("click", function () {
      const event = events[day];
      if (event) {
        $("#event-date").text(`January ${day}`);
        $("#event-title").text(event.title);
        $("#event-description").text(event.description);
        $("#event-image").attr("src", event.image);
        $("#event-link").attr("href", event.link);
      } else {
        $("#event-date").text(`January ${day}`);
        $("#event-title").text("No Events");
        $("#event-description").text("No events scheduled for this day.");
        $("#event-image").attr("src", "Media/imagenes/Formula.e-3.jpg");
        $("#event-link").attr("href", "#");
      }
    });
    $calendarDays.append($dayElement);
  }
}); // DOM LOAD