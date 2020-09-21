const totalFollowers = document.getElementById('total-followers');
const switchContainer = document.getElementById('switch-container');
const cardNumbers = [...document.querySelectorAll('.card__number')];

let totalFollowersNumber = 0;

// Functions
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max + -min)) + min;

const formatNumber = number => {
  if (number > 1999999) return `${Math.floor(number / 1000000)}M`;
  if (number > 19999) return `${Math.floor(number / 1000)}K`;
  return `${number}`;
};

const formatWithDotNotation = number =>
  new Intl.NumberFormat('es-Es').format(number);

const writeNumbers = format => {
  cardNumbers.forEach(number => {
    const random = getRandomInt(0, 5000);
    totalFollowersNumber += random;
    number.textContent = random;
  });
  totalFollowers.textContent = `Total People Who Loves You: ${
    format
      ? formatNumber(totalFollowersNumber)
      : formatWithDotNotation(totalFollowersNumber)
  }`;
};

writeNumbers(false);
