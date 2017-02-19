var start = function() {
  var title = document.getElementById("title");
  var desc = document.getElementById("desc");
  var begin = document.getElementById("begin");
  var heads = document.getElementById("heads");
  var tails = document.getElementById("tails");
  //
  heads.style.visibility = "visible";
  tails.style.visibility = "visible";
  document.getElementById("bar").style.visibility = "visible";
  //
  var headsCount = 0;
  var tailsCount = 0;
  var headsPer;
  var tailsPer;
  //
  desc.innerHTML = "0";
  //
  title.innerHTML = "Flips";
  desc.style.marginTop = "-3em";
  begin.style.visibility = "hidden";
  setInterval(function() {
    desc.innerHTML = +desc.innerHTML + 1;
    var random = Math.random();
    if (random <= 0.5) {
      headsCount = headsCount + 1
    } else if (random > 0.5) {
      tailsCount = tailsCount + 1
    }
    heads.innerHTML = "Heads<br>" + headsCount;
    tails.innerHTML = "Tails<br>" + tailsCount;
    headsPer = (100 * (headsCount / +desc.innerHTML)).toFixed(2);
    tailsPer = (100 * (tailsCount / +desc.innerHTML)).toFixed(2);
    document.getElementById("headsPer").innerHTML = headsPer + "%";
    document.getElementById("tailsPer").innerHTML = tailsPer + "%";
    document.getElementById("headsBar").style.width = (12.5 * headsPer) / 50 + "em";
    document.getElementById("headsBar").style.marginLeft =  ((12.5 * headsPer) / 50) - 25 + "em";
  }, 75)
}
