// ==UserScript==
// @name        Vulcun Auto-Jackpot
// @namespace   denniskupec.com
// @include     https://vulcun.com/user/jackpot
// @version     1
// @grant				none
// ==/UserScript==

var $ = unsafeWindow.$;
var waiting = false;

$("#countdown-timer").bind("change", function()
{
	var countdown = parseInt($(this).val());
	var item_price = parseFloat($("#item-price").text());
	var current_gold = parseInt($(".vu-fee-filter").attr("max"));
	var odds = parseFloat($("#betting-odds").text());

	if (!waiting && countdown > 0 && item_price > 0) {
		var new_bet_amount = (item_price > 2) ? Math.floor((item_price / 0.00125) + 200) : 0;

		$(".vu-fee-filter").val(new_bet_amount);
		$("#betting-amount").text(new_bet_amount + " Gold");
		$("#submit-wager").click();
		waiting = true;
    
		console.log();
		console.log("Submitted jackpot: $" + item_price + " for " + new_bet_amount + " gold");
		console.log("waiting for the site to update...");
	}
  
	if (countdown == 0) {
		waiting = false;
	}

});
