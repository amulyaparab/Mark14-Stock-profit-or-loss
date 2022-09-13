var initialPrice = document.querySelector("#initial-price");
var quantityStocks = document.querySelector("#quantity-stocks");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-button");
var outputEl = document.querySelector("#output");

function calculateProfitOrLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    showOutput(
      "Hey your loss is " +
        loss +
        " and the percent is " +
        lossPercentage +
        " % 🤕"
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    showOutput(
      "Hey your profit is " +
        profit +
        " and the percent is " +
        profitPercentage +
        " % 💸"
    );
  } else {
    showOutput("No pain no gain but also no gain no pain!");
  }
}

function submitHandler(ip, qty, curr) {
  var ip = Number(initialPrice.value);
  var qty = Number(quantityStocks.value);
  var curr = Number(currentPrice.value);
  calculateProfitOrLoss(ip, qty, curr);
}

function showOutput(message) {
  outputEl.innerText = message;
}
submitBtn.addEventListener("click", submitHandler);
