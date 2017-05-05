function buyBottles ( money ) {
  var totalBottles = { bought: Math.floor( money / 2),
                      fromEmpties: 0,
                      fromCaps: 0 };
  var redeemables = { empties: totalBottles.bought,
                      caps: totalBottles.bought };
  addBottles( totalBottles, redeemBottles(redeemables) );
  return totalBottles;
}

function redeemBottles ( redeemables ) {
  var bottles = {
    fromEmpties: Math.floor(redeemables.empties / 2 ),
    fromCaps: Math.floor(redeemables.caps / 4)
  };
  redeemables.empties = (redeemables.empties % 2 ) + totalBottles(bottles);
  redeemables.caps = (redeemables.caps % 4 ) + totalBottles(bottles);
  if ( redeemables.empties >= 2 || redeemables.caps >= 4) {
     addBottles( bottles, redeemBottles(redeemables) );
  }
  return bottles;
}

function totalBottles( bottles ) {
  return bottles.fromEmpties + bottles.fromCaps;
}

function addBottles( a, b ) {
  a.fromEmpties += b.fromEmpties;
  a.fromCaps += b.fromCaps;
}

module.exports = {
  buyBottles: buyBottles,
  redeemBottles: redeemBottles
}