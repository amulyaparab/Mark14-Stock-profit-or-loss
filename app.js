var initialPrice = document.querySelector("#initial-price");
var quantityStocks = document.querySelector("#quantity-stocks");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-button");
var outputEl = document.querySelector("#output");

function calculateProfitOrLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / (initial * quantity)) * 100;
    showOutput(
      "Your loss is " +
        loss.toFixed(2) +
        " and the percent is " +
        lossPercentage.toFixed(2) +
        " % 🤕"
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / (initial * quantity)) * 100;
    showOutput(
      "Your profit is " +
        profit.toFixed(2) +
        " and the percent is " +
        profitPercentage.toFixed(2) +
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

  if (ip <= 0) {
    showOutput("Enter Valid Data❌");
  }
  if (qty <= 0) {
    showOutput("Enter Valid Data❌");
  }
  if (curr <= 0) {
    showOutput("Enter Valid Data❌");
  }
}

function showOutput(message) {
  outputEl.innerText = message;
}
submitBtn.addEventListener("click", submitHandler);
