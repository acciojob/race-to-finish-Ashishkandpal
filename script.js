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

for (let i = 0; i < 5; i++) {
	promises.push(task());
}

const any = async () => {
  const first = await Promise.any(promises.map(val => val));
  output.innerText = first;
  return first;
};

any();
