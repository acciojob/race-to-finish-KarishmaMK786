window.promises = [];

// Function to generate a random time between 1 and 5 seconds
function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000;
}

// Add promises to the array `promises`
for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve) => {
    const randomTime = getRandomTime();
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${randomTime} milliseconds`);
    }, randomTime);
  });

  window.promises.push(promise);
}

// Using Promise.any() to wait for the first promise to resolve
Promise.any(window.promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
  })
  .catch((error) => {
    console.log('All promises rejected:', error);
  });