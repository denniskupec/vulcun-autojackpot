// ==UserScript==
// @name        Vulcun Auto-Jackpot
// @namespace   denniskupec.com
// @include     https://vulcun.com/user/jackpot
// @version     1
// @grant       none
// ==/UserScript==

var $ = unsafeWindow.$;
var waiting = false;

$("#countdown-timer").bind("change", function()
{
  var countdown = parseInt($(this).val());
  var item_price = parseFloat($("#item-price").text());
  var current_gold = parseInt($(".vu-fee-filter").attr("max"));

  if (!waiting && countdown > 0 && current_gold > 1000 && !isNaN(item_price) && item_price > 0)
  {
    waiting = true;
    var new_bet_amount = Math.floor(item_price / 0.00125);
     
    if (new_bet_amount > 1000) new_bet_amount -= 180;
    
    $(".vu-fee-filter").val(new_bet_amount);
    updateJackpotWager(new_bet_amount);

    $("#betting-amount").text(new_bet_amount + " Gold");
    $("#submit-wager").click();
   
    console.log();
		console.log("Submitted jackpot: $" + item_price + " for " + new_bet_amount + " gold");
    console.log("Odds: " + $("#betting-odds").text());
    console.log("Remaining Gold: " + current_gold);
    console.log();
	  console.log("waiting for the site to update...");
  }

  if (countdown == 0)
  {
    var check = setInterval(function(){
      if (parseInt($("#countdown-timer").val()) > 0)
      {
        waiting = false;
        console.log("website updated!");
        clearInterval(check);
      }
    }, 1000);
  }

});
