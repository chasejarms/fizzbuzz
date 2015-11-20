for (var x = 1; x <= 100; x++) {
  if (x % 3 === 0 && x % 5 === 0 && x !== 0 ) {
    var fizzbuzz = document.createElement('div');
    fizzbuzz.className = "circle fizzbuzz";
    fizzbuzz.innerHTML = '<h2>FIZZBUZZ<h2>';
    document.getElementById('rest').appendChild(fizzbuzz);
  }
  else if (x % 3 === 0) {
    var fizz = document.createElement('div');
    fizz.className = "circle fizz";
    fizz.innerHTML = '<h2>FIZZ<h2>';
    document.getElementById('rest').appendChild(fizz);
  }
  else if (x % 5 === 0) {
    var buzz = document.createElement('div');
    buzz.className = "circle buzz";
    buzz.innerHTML = '<h2>BUZZ<h2>';
    document.getElementById('rest').appendChild(buzz);
  }
  else {
    var none = document.createElement('div');
    none.className = "circle none";
    none.innerHTML = '<h2>'+x+'<h2>';
    document.getElementById('rest').appendChild(none);
  }
}
