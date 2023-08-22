var changeButton = document.getElementById("clickMe+");
console.log(changeButton);
changeButton.addEventListener("click", function () {
  const paragraphElement = document.getElementById("numbers");
  var value = document.getElementById("numbers").textContent;
  value = parseInt(value);
  value++;
  value = value.toString();
  paragraphElement.textContent = value;
});
var changeButton = document.getElementById("clickMe-");
console.log(changeButton);
changeButton.addEventListener("click", function () {
  const paragraphElement = document.getElementById("numbers");
  var value = document.getElementById("numbers").textContent;
  value = parseInt(value);
  value--;
  value = value.toString();
  paragraphElement.textContent = value;
});