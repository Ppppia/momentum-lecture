const clockTitle = document.querySelector(".js-clock");

function countDown() {
  const current = new Date();
  const xmas = new Date("Dec 25, 2022 00:00:00");
  const remainingTime = xmas - current;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const countDays = Math.floor(remainingTime / day);
  const countHours = Math.floor((remainingTime % day) / hour);
  const countMinutes = Math.floor((remainingTime % hour) / minute);
  const countSeconds = Math.floor((remainingTime % minute) / second);
  clockTitle.innerHTML = `${countDays < 10 ? `0${countDays}` : countDays}d ${
    countHours < 10 ? `0${countHours}` : countHours
  }h ${countMinutes < 10 ? `0${countMinutes}` : countMinutes}m ${
    countSeconds < 10 ? `0${countSeconds}` : countSeconds
  }s`;
}

countDown();
setInterval(countDown, 1000);
