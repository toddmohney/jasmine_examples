function helloThere() { }

var okThen = function() { }

window.byeNow = function() { }

function outer() {
  function inner() { return "hey buddy"; }

  return inner();
}
