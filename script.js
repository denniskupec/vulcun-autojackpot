// ==UserScript==
// @name        Vulcun Auto-Jackpot
// @namespace   denniskupec.com
// @include     https://vulcun.com/user/jackpot
// @version     1
// @grant       none
// ==/UserScript==

var $ = unsafeWindow.$;
var safe = 1;

$("#countdown-timer").bind("change", function()
{
  var val = parseInt($("#countdown-timer").val());
  
  if (val > 0 && safe == 1) {
    $('#jackpot').submit();
    console.log("bet submitted... waiting...");
    safe = 0;
  }
  
  if (val == 0 && safe == 0) {
    setTimeout(function(){location.reload();}, 10000); // their site is slow at updating
  }
});
