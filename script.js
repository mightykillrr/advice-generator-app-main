const randomiserBtn = document.querySelector(".advice_randomiser");
const adviceNumber = document.querySelector(".advice_number");
const advice = document.querySelector(".advice");

randomiserBtn.addEventListener("click", displayAdvice);

async function returnAdvice() {
  const site = await fetch("https://api.adviceslip.com/advice");

  const { slip } = await site.json();
  return [slip.id, slip.advice];
}

async function displayAdvice() {
  const [id, adviceData] = await returnAdvice();
  adviceNumber.textContent = id;
  advice.textContent = adviceData;
}

displayAdvice();
