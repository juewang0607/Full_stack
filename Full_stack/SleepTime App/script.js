function handleOnClickEvent() {
  let output = document.querySelector(".output");
  output.style.display = "block";
  let hours = document.getElementById('hours');

  // When the zzz button is clicked, we want to record the current time;
  let now = Date.now();

  // Allow 14 minutes to fall asleep;
  let minute = 60 * 1000; // milliseconds
  now += 14 * minute;

  // Create six cycles of 90 minutes each;
  let hoursString = "";
  for (let c = 1; c <= 6; c++) {
    now += 90 * minute; // a sleep cycle passed!
    let cycle = new Date(now);
    hoursString += cycle.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    if (c < 6) {
      hoursString += ", ";
    }
  }

  // Display the cycles as suggested wake-up times.
  hours.innerText = hoursString;
}