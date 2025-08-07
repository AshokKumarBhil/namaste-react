let count = 0;
const btn = document.getElementById("btn");
const countDisplay = document.getElementById("count");

btn.addEventListener("click", function () {
  count++;
  countDisplay.textContent = `You clicked ${count} times`;
});
