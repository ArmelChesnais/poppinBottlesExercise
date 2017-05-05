function buyBottles ( money ) {
  var totalBottles = Math.floor( money / 2);
  var redeemables = { empties: totalBottles,
                      caps: totalBottles };
  totalBottles += redeemBottles(redeemables);
  return totalBottles;
}

function redeemBottles ( redeemables ) {
  var bottles = 0;
  bottles += Math.floor(redeemables.empties / 2 ) + Math.floor(redeemables.caps / 4);
  redeemables.empties = (redeemables.empties % 2 ) + bottles;
  redeemables.caps = (redeemables.caps % 4 ) + bottles;
  if ( redeemables.empties >= 2 || redeemables.caps >= 4) {
    bottles += redeemBottles(redeemables);
  }
  return bottles;
}

module.exports = {
  buyBottles: buyBottles,
  redeemBottles: redeemBottles
}