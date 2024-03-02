const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const currentType = document.getElementsByClassName("timeframes");

for (let i = 0; i < currentType.length; i++) {
  currentType[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const timeframes = Object.keys(data[0].timeframes);
const cardCurrHrs = document.querySelectorAll(".card-hrs");
const cardPrevHrs = document.querySelectorAll(".card-prev");

timeframes.forEach((timeframe) => {
  const bttn = document.getElementById(timeframe);
  bttn.addEventListener("click", () => {
    for (let i = 0; i < data.length; i++) {
      cardCurrHrs[i].style.opacity = 0;
      cardCurrHrs[i].style.marginLeft = "-3rem";
      cardPrevHrs[i].style.opacity = 0;
      cardPrevHrs[i].style.marginLeft = "-3rem";
      setTimeout(() => {
        const currHrs = data[i].timeframes[timeframe].current;
        const prevHrs = data[i].timeframes[timeframe].previous;
        const suffix = currHrs > 1 ? "hrs" : "hr";
        const prevSuffix = prevHrs > 1 ? "hrs" : "hr";
        cardCurrHrs[i].innerHTML = `${currHrs}${suffix}`;
        cardPrevHrs[i].innerHTML = `Last Week - ${prevHrs}${prevSuffix}`;
        cardCurrHrs[i].style.opacity = 1;
        cardCurrHrs[i].style.marginLeft = "0";
        cardPrevHrs[i].style.opacity = 1;
        cardPrevHrs[i].style.marginLeft = "0";
      }, 200);
    }
  });
});
