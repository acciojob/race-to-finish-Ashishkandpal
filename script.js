window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

const output = document.querySelector('#output');

const randomTime = Math.floor(Math.random * (5 - 1 + 1) + 1);

const timeout = function (ms) {
  return new Promise((resolve) => setTimeout(resolve(`this is ${ms}`), ms * 1000));
};


for (let i = 0; i < 5; i++) {
	promises.push(timeout.bind(randomTime));
}

const callIt = aysnc () => {
	const first = await Promise.any(...promises);
	output.innerText = first;
}


