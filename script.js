window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const output = document.querySelector("#output");

const randomTime = () => Math.floor(Math.random() * (5 - 1 + 1) + 1);

const timeout = function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms * 1000));
};

const task = async () => {
  const randomNum = randomTime();
  await timeout(randomNum);
  return randomNum;
};

const any = async () => {
  const first = await Promise.any([task(), task(), task(), task(), task()]);
  output.innerText = first;
  return first;
};

any();
